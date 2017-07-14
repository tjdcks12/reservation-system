# Spring Rest API

- Rest API란?

http://meetup.toast.com/posts/92

- Service 클래스 작성하기
- Spring Rest API 를 사용하기 위한 설정하기
- Spring Rest API 클래스 작성하기

4-1. service 클래스 작성하기

MemberService 인터페이스 작성

```
package carami.todo.service;

import carami.todo.domain.Member;

public interface MemberService {
    public Member get(Long id);
    public Member addMember(Member member);
}

```

MemberServiceImpl 클래스 작성

carami.todo.domain.impl 패키지를 생성후 작성한다.

```
package carami.todo.service.impl;

import carami.todo.dao.MemberDao;
import carami.todo.domain.Member;
import carami.todo.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class MemberServiceImpl implements MemberService {
    @Autowired
    MemberDao memberDao;

    @Override
    public Member get(Long id) {
        return memberDao.selectById(id);
    }

    @Override
    public Member addMember(Member member){
        Long insert = memberDao.insert(member);
        member.setId(insert);
        return member;
    }
}

```

테스트를 위해 Member클래스에 hashCode, equals메소드를 오버라이딩하여 구현한다. dao를 작성할 때 미리 만들어두면 편하다.
```
package carami.todo.domain;

public class Member {
    private long id;
    private String name;
    private String email;
    private String passwd;


    // 생략
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Member member = (Member) o;

        if (id != member.id) return false;
        if (name != null ? !name.equals(member.name) : member.name != null) return false;
        if (email != null ? !email.equals(member.email) : member.email != null) return false;
        return passwd != null ? passwd.equals(member.passwd) : member.passwd == null;
    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (passwd != null ? passwd.hashCode() : 0);
        return result;
    }
}

```

테스트 코드의 작성

```
package carami.todo.service;

import carami.todo.config.RootApplicationContextConfig;
import carami.todo.dao.MemberDao;
import carami.todo.domain.Member;
import carami.todo.service.MemberService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.*;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = RootApplicationContextConfig.class)
@Transactional  // Transactional이 있을 때와 없을 때 각각 실행해보고 그 때마다 msyql에서 결과를 select해본다.
public class MemberServiceTest {
    @Autowired
    MemberService memberService;

    @Test
    public void shouldInsertAndSelect() {
        // given
        Member member = new Member("강경미", "carami@nate.com", "1234");
        Member saveMember = memberService.addMember(member);

        // when
        Member resultMember = memberService.get(saveMember.getId());

        // member에 hashCode, equals메소드를 오버라이딩하여 구현해야한다.
        assertThat(resultMember, is(saveMember));
    }

}
```

4-2. Spring Rest API 를 사용하기 위한 설정하기

##  pom.xml 에 라이브러리 추가하기

jackson에 대한 설정을 추가한다. jackson은 json 메시지를 다루기 위해 사용되는 라이브러리이다.

```

<!-- jackson -->
<jackson2.version>2.8.6</jackson2.version>

......


<!--Jackson Module-->
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>${jackson2.version}</version>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-core</artifactId>
    <version>${jackson2.version}</version>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-annotations</artifactId>
    <version>${jackson2.version}</version>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.datatype</groupId>
    <artifactId>jackson-datatype-jdk8</artifactId>
    <version>${jackson2.version}</version>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.datatype</groupId>
    <artifactId>jackson-datatype-jsr310</artifactId>
    <version>${jackson2.version}</version>
</dependency>
```

## ServletContextConfig 를 추가한다.

ServletContextConfig 에 MessageConverter에 대한 내용을 추가한다.
해당 내용을 추가해야 json 메시즈를 restapi가 받아들일 수 있고, 객체를 json으로 변환하여 출력할 수 있다.

```
package carami.todo.config;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

import java.util.List;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"carami.todo.controller"})
public class ServletContextConfig extends WebMvcConfigurerAdapter {
    @Bean
    public ViewResolver viewResolver() {
         InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setViewClass(JstlView.class);
        viewResolver.setPrefix("/WEB-INF/views/");
        viewResolver.setSuffix(".jsp");
        return viewResolver;
    }

    // 여기서 부터 추가된다.
    @Bean
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        converters.add(jackson2HttpMessageConverter());
        super.configureMessageConverters(converters);
    }

    @Bean
    public MappingJackson2HttpMessageConverter jackson2HttpMessageConverter() {
        MappingJackson2HttpMessageConverter jsonConverter = new MappingJackson2HttpMessageConverter();
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        objectMapper.registerModule(new Jdk8Module());
        jsonConverter.setObjectMapper(objectMapper);
        return jsonConverter;
    }
}
```

4-3. Spring Rest API 클래스 작성하기

Member의 passwd는 JsonIgnore를 할 것이기 때문에 passwd를 파라미터로 받아들이기 위한 클래스를 하나 만든다.
```
package carami.todo.dto;

public class MemberParam {
    private String name;
    private String email;
    private String passwd;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }
}

```

```

package carami.todo.controller;

import carami.todo.domain.Member;
import carami.todo.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/members")
public class MemberRestController {

    @Autowired
    private MemberService memberService;


    @PostMapping
    public Member create(@RequestBody MemberParam memberParam){
        // Member클래스의 setMember에 @JsonIgnore를 설정했기 때문에
        // Member를 이용하여 passwd를 받아들일 수 없다. 그런 이유로
        // MemberParam을 사용하였다.
        Member member = new Member();
        member.setName(memberParam.getName());
        member.setEmail(memberParam.getEmail());
        member.setPasswd(memberParam.getPasswd());
        return memberService.addMember(member);
    }

    @GetMapping("/{id}")
    public Member getMember(@PathVariable Long id){
        return memberService.get(id);
    }
}


```

수정된 Member클래스. getPasswd()메소드 위에 @JsonIgnore 가 붙은 것을 확인할 수 있다.
```
package carami.todo.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Member {
    private long id;
    private String name;
    private String email;
    private String passwd;

    public Member() {
    }

    public Member(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public Member(String name, String email, String passwd) {
        this.name = name;
        this.email = email;
        this.passwd = passwd;
    }

    public Member(long id, String name, String email, String passwd) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwd = passwd;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @JsonIgnore
    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Member member = (Member) o;

        if (id != member.id) return false;
        if (name != null ? !name.equals(member.name) : member.name != null) return false;
        if (email != null ? !email.equals(member.email) : member.email != null) return false;
        return passwd != null ? passwd.equals(member.passwd) : member.passwd == null;
    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (passwd != null ? passwd.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Member{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", passwd='" + passwd + '\'' +
                '}';
    }
}

```

mvn tomcat7:run 으로 톰켓을 실행한다.

4-4. Rest api 테스트를 위한 클라이언트를 Chrome에 추가한다.
https://chrome.google.com/webstore/category/extensions?hl=ko

에서 다음을 검색한다.

"Restlet Client"

Restlet Client - REST API Testing 가 검색되어 나오면 설치를 한다.
postman 과 유사하지만 좀 더 나은듯 하다. (사실 postman 버그 때문에 고생한적이 있어서......)





# 회원 등록 테스트

method : post
url :  http://localhost:8080/api/members
body :

{
  "name":"강경미",
  "email":"carami@nate.com",
  "passwd":"1234"
}

body의 값을 json으로 받아들이고, json형식으로 반환하기 위해서는 jackson 과 같은 라이브러리 설정이 있어야 하고 MessageConverter에도 jackson 메시지 컨버터가 설정되어 있어야 한다.

메시지 컨버터를 설정하지 않고 json 데이터를 보내게 되면 415 오류가 발생한다.

```
415 Unsupported Media Type

   The 415 (Unsupported Media Type) status code indicates that the
   origin server is refusing to service the request because the payload
   is in a format not supported by this method on the target resource.
   The format problem might be due to the request's indicated
   Content-Type or Content-Encoding, or as a result of inspecting the
   data directly.
```

결과는 다음과 같다.

```
POST /api/members HTTP/1.1
Content-Length: 82
Host: localhost:8080
Content-Type: application/json;charset=UTF-8

{
    "name": "강경미",
    "email": "carami@nate.com",
    "passwd": "1234"
}

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked
Date: Sun, 02 Jul 2017 08:15:57 GMT

{"id":15,"name":"강경미","email":"carami@nate.com","passwd":"1234"}
```

암호도 그대로 노출되는 것을 확인할 수 있다. Member정보중에서 암호를 json메시지로 변경하지 않도록 하려면?

Member 의 getPasswd() 메소드 위에 JsonIgnore 어노테이션을 붙인다.

```
import com.fasterxml.jackson.annotation.JsonIgnore;
.....

@JsonIgnore
public String getPasswd() {
    return passwd;
}
```

# 회원 정보 읽어오기 테스트

method : get

url :  http://localhost:8080/api/members/15

실행결과. getPasswd()에는 @JsonIgnore를 적용한 상태이다.

```
GET /api/members/14 HTTP/1.1
Host: localhost:8080

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked
Date: Sun, 02 Jul 2017 08:21:14 GMT

{"id":14,"name":"강경미","email":"carami@nate.com"}
```

4-4. update, delete 에 대한 기능을 Service, RestController에 추가를 한다.

수정된 MemberService.javax

```
package carami.todo.service;

import carami.todo.domain.Member;

public interface MemberService {
    public Member get(Long id);
    public Member addMember(Member member);

    // 추가된 메소드
    public int delete(Long id);
    public int update(Member member);
}

```

수정된 MemberServiceImpl.java

```
package carami.todo.service.impl;

import carami.todo.dao.MemberDao;
import carami.todo.domain.Member;
import carami.todo.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class MemberServiceImpl implements MemberService {
    @Autowired
    MemberDao memberDao;

    @Override
    @Transactional(readOnly = true)
    public Member get(Long id) {
        return memberDao.selectById(id);
    }

    @Override
    @Transactional(readOnly = false)
    public Member addMember(Member member){
        Long insert = memberDao.insert(member);
        member.setId(insert);
        return member;
    }

    @Override
    public int delete(Long id) {
        return memberDao.delete(id);
    }

    @Override
    public int update(Member member) {
        return memberDao.update(member);
    }
}

```


수정된 Test코드

```
package carami.jdbc;

import carami.todo.config.RootApplicationContextConfig;
import carami.todo.dao.MemberDao;
import carami.todo.domain.Member;
import carami.todo.service.MemberService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.*;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = RootApplicationContextConfig.class)
@Transactional
public class MemberServiceTest {
    @Autowired
    MemberService memberService;

    @Test
    public void shouldInsertAndSelect() {
        // given
        Member member = new Member("강경미", "carami@nate.com", "1234");
        Member saveMember = memberService.addMember(member);

        // when
        Member resultMember = memberService.get(saveMember.getId());

        // member에 hashCode, equals메소드를 오버라이딩하여 구현해야한다.
        assertThat(resultMember, is(saveMember));
    }


    @Test
    public void shouldDelete() {
        // given
        Member member = new Member("강경미", "carami@nate.com", "1234");
        Member saveMember = memberService.addMember(member);

        // when
        int deleteCount = memberService.delete(saveMember.getId());

        // then
        assertThat(deleteCount, is(1));
    }

    @Test
    public void shouldUpdate() {
        // given
        Member member = new Member("강경미", "carami@nate.com", "1234");
        Member saveMember = memberService.addMember(member);

        // when
        member.setId(saveMember.getId());
        member.setName("강경미2");
        member.setEmail("carami2@nate.com");
        int updateCount = memberService.update(member);

        // Then
        Member result = memberService.get(member.getId());
        assertThat(result.getName(), is("강경미2"));
        assertThat(result.getEmail(), is("carami2@nate.com"));
    }

}
```

수정된 MemberRestController

```
package carami.todo.controller;

import carami.todo.domain.Member;
import carami.todo.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/members")
public class MemberRestController {

    @Autowired
    private MemberService memberService;

    @PostMapping
    public Member create(@RequestBody Member membrer){
        return memberService.addMember(membrer);
    }

    @GetMapping("/{id}")
    public Member getMember(@PathVariable Long id){
        return memberService.get(id);
    }

    @PutMapping
    public int update(@RequestBody Member membrer){
        return memberService.update(membrer);
    }

    @DeleteMapping("/{id}")
    public int delete(@PathVariable Long id){
        return memberService.delete(id);
    }
}

```


Rest api Client를 이용하여 테스트한다.


### 수정 테스트

method : put
url : http://localhost:8080/api/members

body 내용 : 14번이 있는지 db에서 확인한다. 있는 id를 넣어야 한다.

{
  "id": 14,
    "name": "강경미2",
    "email": "carami2@nate.com"
}


실행 결과는 다음과 같다.
```
PUT /api/members HTTP/1.1
Content-Length: 74
Host: localhost:8080
Content-Type: application/json;charset=UTF-8

{
  "id": 14,
    "name": "강경미2",
    "email": "carami2@nate.com"
}

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked
Date: Sun, 02 Jul 2017 08:28:58 GMT

1
```


### 삭제 테스트

method : delete

url :  http://localhost:8080/api/members/15

실행결과

```
DELETE /api/members/15 HTTP/1.1
Host: localhost:8080

HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked
Date: Sun, 02 Jul 2017 08:30:18 GMT

1
```




# 테스트 코드 작성


pom.xml 파일에 다음과 같은 라이브러리를 추가한다.

```
<!-- mockito -->
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-all</artifactId>
    <version>1.10.19</version>
</dependency>

<!-- json path -->
<dependency>
    <groupId>com.jayway.jsonpath</groupId>
    <artifactId>json-path</artifactId>
    <version>2.2.0</version>
</dependency>

```

테스트 코드의 작성

@Before아래에 있는 설정 test코드끼지만 작성하고 테스트. 하나씩 메소드를 늘려가며 테스트한다.

```
package carami.jdbc;

import carami.todo.controller.MemberRestController;
import carami.todo.domain.Member;
import carami.todo.dto.MemberParam;
import carami.todo.service.MemberService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.invocation.InvocationOnMock;
import org.mockito.runners.MockitoJUnitRunner;
import org.mockito.stubbing.Answer;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static junit.framework.TestCase.assertTrue;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.anyLong;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(MockitoJUnitRunner.class)
public class MemberRestControllerTest {

    // 컨트롤러에서 해당 Service는 완전하다고 가정하기 때문에 Mock으로 선언한다.
    @Mock
    MemberService memberService;

    @InjectMocks
    MemberRestController controller;

    MockMvc mvc;

    private static long id = 1L;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);

        this.mvc = MockMvcBuilders.standaloneSetup(controller)
                .build();


        // memberService의 addMember에는 Member를 파라미터로 받아들이게 되는데,
        // thenAnswer는 Answer를 상속받는 객체를 반환한다.
        // Answer<Member>(){ ... } 는 Member를 반환하는 이름없는 객체를 생성을 하는 것이고
        // 그 안의 메소드는 Answer가 가지고 있는 메소드를 오버라이딩 한다.
        // InvocationOnMockdms Mock객체에 대한 레퍼런스를 전달하여 해당 Mock이 파라미터로 받은 값을 구할때 사용한다.
        // Mock객체가 받은 Member파라미터의 id값을 1부터 시작하는 값으로 자동으로 설정되게 하였다.
        when(memberService.addMember(any(Member.class))).thenAnswer(
                new Answer<Member>() {
                    @Override
                    public Member answer(InvocationOnMock invocation) throws Throwable {
                        Object[] args = invocation.getArguments(); // arguments
                        MemberService mock = (MemberService)invocation.getMock();
                        Member member = (Member)args[0];
                        member.setId(id++);
                        return member;
                    }
                }
        );


        // delete메소드는 long값을 받아들여 1을 반환한다.
        when(memberService.delete(anyLong())).thenReturn(1);

        // update메소드는 Member를 받아들여 1을 반환한다.
        when(memberService.update(any(Member.class))).thenReturn(1);

        Member member = new Member(1L, "강경미", "carami@nate.com", "1234");
        // get메소드는 long값을 받아들여 member객체를 반환한다.
        when(memberService.get(anyLong())).thenReturn(member);
    }


    @Test
    public void configTest(){
        assertTrue(true);
    }

    // jsonPath를 사용하려면 com.jayway.jsonpath.Predicate 에 대한 라이브러리가 설정되어있어야 한다.
    @Test
    public void shouldCreate() throws Exception {
        String requestBody = "{\"name\":\"강경미\", \"email\":\"carami@nate.com\", \"passwd\":\"1234\" }";

        mvc.perform(
                post("/api/members")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestBody)
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.name").value("강경미"))
                .andExpect(jsonPath("$.email").value("carami@nate.com"));
                //.andExpect(jsonPath("$.passwd").value("1234")); // passwd값은 @jsoinignore를 하였기 때문에 결과가 나오지 않아야 한다.

        // controller내부적으로 회원정보가 등록할 때 addMember가 호출되었는지 검사한다.
        verify(memberService).addMember(any(Member.class));
    }


    @Test
    public void getMember() throws Exception{
        mvc.perform(
                get("/api/members/{id}", 1)
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
        .andExpect(jsonPath("$.id").exists())
        .andExpect(jsonPath("$.name").value("강경미"))
        .andExpect(jsonPath("$.email").value("carami@nate.com"));

        verify(memberService).get(anyLong());
    }

    @Test
    public void shoulDelete() throws Exception {
        MemberParam member = new MemberParam();
        member.setName("강경미");
        member.setEmail("carami@nate.com");
        member.setPasswd("1234");
        Member resultMember = controller.create(member);

        mvc.perform(
                delete("/api/members/{id}", resultMember.getId())
                        .contentType(MediaType.APPLICATION_JSON)
        )
                .andExpect(status().isOk());

        verify(memberService).delete(anyLong());
    }

    @Test
    public void shoulUpdate() throws Exception {
        MemberParam member = new MemberParam();
        member.setName("강경미");
        member.setEmail("carami@nate.com");
        member.setPasswd("1234");
        Member resultMember = controller.create(member);
        resultMember.setName("강경미2");
        resultMember.setEmail("carami2@nate.com");

        String requestBody = "{\"id\": " + resultMember.getId() + ", \"name\":\"강경미2\", \"email\":\"carami2@nate.com\" }";

        mvc.perform(
                put("/api/members")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestBody)
        )
                .andExpect(status().isOk());

        verify(memberService).update(any(Member.class));
    }
}

```
