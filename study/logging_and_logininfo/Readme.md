# 로깅, 로그인기능 개선

## slf4j + logback 을 이용한 로깅하기

- 참고문서 : https://github.com/sonegy/how-to-use-logback


### pom.xml 파일 수정

- 다음의 내용을 추가한다.

```
		<logback.version>1.1.3</logback.version>
		<jcl.slf4j.version>1.7.12</jcl.slf4j.version>

......

        <!-- slf4j -->
        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>jcl-over-slf4j</artifactId>
            <version>${jcl.slf4j.version}</version>
        </dependency>

        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-classic</artifactId>
            <version>${logback.version}</version>
        </dependency>

```

### 로깅 인터셉터를 수정한다.


```
package carami.todo.intercepter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoggingHandlerInterceptor extends HandlerInterceptorAdapter {
    // Logger객체를 선언
    private static Logger logger = LoggerFactory.getLogger(LoggingHandlerInterceptor.class);
    private static final String ATTRIBUTE_BEGIN_TIME = "ATTR_BEGIN_TIME";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        Long currentTime = System.currentTimeMillis();
        request.setAttribute(ATTRIBUTE_BEGIN_TIME, currentTime);

        return super.preHandle(request, response, handler);
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

        long beginTime = (long) request.getAttribute(ATTRIBUTE_BEGIN_TIME);
        String uri = request.getRequestURI();
        String method = request.getMethod();

        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("[").append(method).append("] ");
        stringBuilder.append(uri).append(" ");
        stringBuilder.append(System.currentTimeMillis() - beginTime);
        stringBuilder.append(" ms");

        // 로그 남기기 '+'를 이용하여 문자열을 생성하는 것은 퍼포먼스에 문제를 발생시킨다. {}를 이용하여 파라미터의 값을 출력할 수 있다.
        logger.info("메소드 실행 시간 {}", stringBuilder.toString());
        //System.out.println(stringBuilder.toString());

        super.postHandle(request, response, handler, modelAndView);
    }
}

```

### 출력결과

2017-07-31 13:48:06 INFO  c.t.i.LoggingHandlerInterceptor - 메소드 실행 시간 [GET] / 1 ms

### 추가적으로 해야할 일

- 다른 Controllre에서도 System.out.println을 이용하여 출력하는 것을 로거를 이용하여 출력하도록 수정한다.
- 파일에 로그를 남기도록 logback.xml 파일을 수정한다.



## 로그인한 정보를 ThreadLocal을 이용하여 값 전달하기

- LoginCheckInterceptor에서 세션에 로그인 정보가 있을 경우 ThreadLocal객체에 값을 담는다.
- ThreadLocal객체에 값을 담기 위하여 SecurityContext객체를 새롭게 만들었다.
- ThreadLocal이란 무엇일까? 하나의 쓰레드 안에서 겂을 유지할 수 있도록 하는 방법을 제공한다. 웹 url호출 하나당 하나의 Thread가 동작한다고 생각하면 쉽다.
- 하나의 url호출당 값을 유지하고자 하는 용도로 종종 사용한다.
- 세션에 값을 담아두고 사용하는 방법과 해당 방법을 비교해보면 전자가 더 간편할 수 있다. 하지만, 누군가가 로그인 과정을 미리 다 만들어 놓고, 로그인 정보를 얻고 싶을 경우 파라미터에 '@AuthUser NaverLoginUser naverLoginUser'만 붙이라고 가이드할 수 있다.
이 경우 사용자는 로그인 정보가 세션에 있든 어디에 있든 그 방법을 알지 않아도 된다는 장점이 있다.


참고 : http://javacan.tistory.com/entry/ThreadLocalUsage

- NaverLoginUser객체를 하나의 쓰레드상에서 공유하기 위해 SecurityContext객체를 만들었다.
```
package carami.todo.security;

import carami.todo.dto.NaverLoginUser;

public class SecurityContext {
    public static ThreadLocal<NaverLoginUser> loginUser = new ThreadLocal<NaverLoginUser>();
}
```

- 세션에 로그인 정보가 있을 경우 SecurityContext객체에 값을 담는다. 값이 없으면 null을 저장한다.
```
package carami.todo.intercepter;

import carami.todo.dto.NaverLoginUser;
import carami.todo.security.SecurityContext;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LoginCheckInterceptor extends HandlerInterceptorAdapter {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HttpSession session = request.getSession();
        NaverLoginUser naverLoginUser = (NaverLoginUser)session.getAttribute("loginUser");
        String path = request.getRequestURI();

        // login정보가 있을 경우 SEcurityContext에 값을 할당한다.
        if(naverLoginUser != null) {
            SecurityContext.loginUser.set(naverLoginUser);
        }

        System.out.println("path : " + path);

        if("/loginpage".equals(path)){
            if(naverLoginUser == null){
                response.sendRedirect("/");
                return false;
            }
        }
        return true;
    }
}

```

- ArgumentResolver에서는 @AuthUser라는 어노테이션이 붙어있을 경우, SecurityContext로부터 NaverLoginUser객체를 읽어와서 파라미터값으로 리턴한다.

```
package carami.todo.security;

import carami.todo.dto.NaverLoginUser;
import org.springframework.core.MethodParameter;

import org.springframework.web.bind.support.WebArgumentResolver;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

public class AuthUserWebArgumentResolver implements HandlerMethodArgumentResolver {
    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        System.out.println("supportsParameter!!!!!!!!!!!!!!!!!!");
        AuthUser loginUser = parameter.getParameterAnnotation( AuthUser.class );
        if(loginUser == null)
            return false;
        else
            return true;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        System.out.println("resolveArgument!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        // 파라미터에 LoginUser어노테이션이 적용된 파라미터를 찾는다.
        AuthUser loginUser = parameter.getParameterAnnotation( AuthUser.class );

        if( loginUser == null ) {
            // 어노테이션이 없을 경우에는 값 할당을 null로 바꾼다. SecurityContext로부터 값을 읽어들일 수 없도록 한다.
            SecurityContext.loginUser.set(null);
            return WebArgumentResolver.UNRESOLVED;
        }

        // 인터셉터에서 설정한 NaverLoginUser객체를 반환한다.
        return SecurityContext.loginUser.get();
    }
}
``


- 컨트롤러의 수정

/ 요청과 /loginpage요청에서 @AuthUser NaverLoginUser naverLoginUser를 파라미터로 전달하게 하였다.
전자의 경우 로그인을 안한 상태에서도 실행될 수 있기 때문에 null값이 아닌 경우에만 값을 출력하도록 하였고,
후자의 경우는 반드시 로그인을 한 상태에서만 실행하기 때문에 naverLoginUser가 널인지 체크하지 않는다.

```

@Controller
public class HelloController {
    @Autowired
//    @Qualifier("restTemplate")
    RestTemplate restTemplate;

    String clientId = "ZLP834mSIldLNVIRkjnA";//애플리케이션 클라이언트 아이디값";

    @GetMapping(path = "/")
    public String hello(@AuthUser NaverLoginUser naverLoginUser, HttpServletRequest request){
        if(naverLoginUser != null) {
            System.out.println("----------------------------------------------------------");
            System.out.println("ArgumentResolver에서 넘긴 이름 : " + naverLoginUser.getName());
            System.out.println("----------------------------------------------------------");
        }
        String callbackUrl = "http://localhost:8080/naver_callback";
        String naverLoginUrl = getNaverLoginUrl(callbackUrl, request.getSession());
        request.setAttribute("naverLoginUrl", naverLoginUrl);
        return "hello";
    }

......

    @GetMapping(path = "/loginpage")
    public String loginpage(@AuthUser NaverLoginUser naverLoginUser, HttpServletRequest request){
        System.out.println("로그인 정보 -----------------------------");
        System.out.println(naverLoginUser);
        request.setAttribute("naverLoginuser", naverLoginUser);// jsp에게 값을 넘기려면 request를 통하여 넘긴다.
        System.out.println("로그인 정보 -----------------------------");
        return "loginpage";
    }
```