# ArgumentResolver 이용하기

- ArgumentResolver란? 컨틀롤러의 메소드의 파라미터에 값을 전달할 수 있는 방법이다.
 - 예를 들어 Controller에 hello(@Auth String name) 이라는 메소드가 있을 경우, 파라미터에 @Auth라는 어노테이션이 붙어있는 String 타입의 변수가 있을 경우 원하는 값을 넣을 수 있다.
- 즉, 선처리한 어떤 결과를 컨트롤러의 메소드의 파라미터에 값을 전달할 수 있다.


## ServletContextConfig 에 다음의 코드를 추가한다.

```
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
        argumentResolvers.add(new AuthUserWebArgumentResolver());

    }
```

addARgumentResolvers메소드를 오버라이딩한다. 파라미터로 전달된 argumentResolvers에 사용자가 작성한 ArgumentResolver객체를 추가한다.

## AuthUserWebArgumentResolver 클래스를 작성한다.

- HandlerMethodArgumentResolver 인터페이스를 상속받는 AuthUserWebArgumentResolver클래스를 작성한다.
- supportsParameter메소드는 파라미터에 내가 원하는 형태의 파라미터가 있을 경우 true를 반환하게 한다. 파라미터가 여러개면 여러번 호출된다.
- resolveArgument는 supportsParameter메소드가 true를 반환할 때 동작한다. 해당 파라미터의 변수에 할당할 값을 리턴한다.


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
        // 파라미터중에서 AuthUser라는 어노테이션이 붙은 값을 요청한다.
        AuthUser loginUser = parameter.getParameterAnnotation( AuthUser.class );
        // 어노테이션이 붙지 않을 경우는 false, 붙어 있을 경우 true를 반환한다.
        if(loginUser == null)
            return false;
        else
            return true;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        // AuthUser어노테이션을 구한다.
        AuthUser loginUser = parameter.getParameterAnnotation( AuthUser.class );
        // AuthUser어노테이션이 붙어있지 않을 경우  WebArgumentResolver.UNRESOLVED를 반환한다. 값을 할당하지 않겠다는 의미이다.
        if( loginUser == null ) {
            return WebArgumentResolver.UNRESOLVED;
        }

        // NaverLoginUser객체를 전달한다. 여기까지 코드만 본다면 메소드(@AuthUser NaverLoginUsaer 변수명) 와 같은 형태의 메소드가 있어야 해당 코드가 동작한다.
        NaverLoginUser naverLoginUser = new NaverLoginUser();
        naverLoginUser.setName("resolveArgument에서 넣어준 이름");

        return naverLoginUser;
    }
}
```

## AuthUser 어노테이션 클래스

- 사용자 정의 어노테이션 클래스. 동적으로 해당 어노테이션을 사용하기 위해서 @Retention(RetentionPolicy.RUNTIME) 이 지정된 것을 알 수 있다.
- @Target(ElementType.PARAMETER) 는 파라미터에 붙는 어노테이션이라는 것을 의미한다.
- @Documented 는 문서에도 어노테이션의 정보가 표현된다는 것을 의미합니다.

```
package carami.todo.security;

import java.lang.annotation.*;

@Target(ElementType.PARAMETER)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface AuthUser {
}

```

## HelloController의 메소드를 다음과 같이 수정한다.

- 컨트롤러의 메소드 파라미터에 '@AuthUser NaverLoginUser naverLoginUser' 를 추가한다.
- ArgumentResolver에 위해서 넘긴 값이 해당 컨트롤러 메소드가 호출될 때 출력되는 것을 알 수 있다.

```
    @GetMapping(path = "/")
    public String hello(@AuthUser NaverLoginUser naverLoginUser, HttpServletRequest request){
        System.out.println("----------------------------------------------------------");
        System.out.println("ArgumentResolver에서 넘긴 이름 : " + naverLoginUser.getName());
        System.out.println("----------------------------------------------------------");
        String callbackUrl = "http://localhost:8080/naver_callback";
        String naverLoginUrl = getNaverLoginUrl(callbackUrl, request.getSession());
        request.setAttribute("naverLoginUrl", naverLoginUrl);
        return "hello";
    }
```

## 실행


실행하여 / 에 대한 요청을 하면 console에 다음과 같은 메시지가 출력되는 것을 확인할 수 있다.


```
----------------------------------------------------------
ArgumentResolver에서 넘긴 이름 : resolveArgument에서 넣어준 이름
----------------------------------------------------------
```
