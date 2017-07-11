# jstl (JSP Standard Tag Library)
- JSP 페이지에서 논리적인 판단,반복문의 처리, 데이터베이스 등의 처리를 하는 코드를 깔끔하게 작성하기
위해서 작성한 표준화된 커스텀 태그이다.

```
<%
    if (list.size() > 0) {
        for (int i = 0 ; i < list.size() ; i++) {
            Categoery category = (Categoery) list.get(i);
%>
    <%= category.getName() %>
    ...
<%
        }
    } else {
%>
    데이터가 없습니다.
<%
    }
%>

```
위와 같은 코드를 아래처럼 쓸 수 있다.

```
<c:if test="!empty ${list}">
   <c:foreach varName="category" list="${list}">
      ${category.name}
   </c:foreach>
</c:if>
<c:if test="empty ${list}">
      데이터가 없습니다.
</c>
```

## jstl이 제공하는 태그의 종류
|라이브러리|하위 기능|접두어|관련URI|
|---|---|---|---|
|코어|변수지원,흐름 제어,URL 처리|c|http://java.sun.com/jsp/jstl/core |
|XML|XML 코어,흐름 제어,XML 변환|x|http://java.sun.com/jsp/jstl/xml |
|국제화|지역,메시지 형식,숫자 및 날짜 형식 |fmt|http://java.sun.com/jsp/jstl/fmt |
|데이터베이스|SQL|sql|http://java.sun.com/jsp/jstl/sql |
|함수|콜렉션 처리,String 처리|fn|http://java.sun.com/jsp/jstl/functions |

## 코어태그 : 변수 지원 태그 - set, remove
*변수 설정 : 지정한 영역에 변수를 생성한다. *
```
<c:set var="varName" scope="session" value="someValue" />
<c:set var="varName" scope="request">
some Value
</c:set>
```
var - EL에서 사용될 변수명
scope - 변수값이 저장될 영역(page, request, session, application)
value - 변수값

*변수 제거*
```
<c:remove var="varName" scope="request" />
```

*프로퍼티, 맵처리 *
```
<c:set target="${member}" property="propertyName" value="anyValue" />

//member 객체가 자바빈일 경우: member.setPropertyName(anyvalue)
//member 객체가 맵(map)일 경우: member.put(propertyName, anyValue);

/*
target -<c:set>으로 지정한 변수 객체
property - 프로퍼티 이름
value - 새로 지정할 프로퍼티 값
*/
```

## if

**문법**
```
<c:if test="조건">
...
...
</c:if>
```

**예제**
```
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:if test="true">
무조건 수행
</c:if>

<c:if test="${param.name == 'kang'}">
param.name 의 값이 kang 일때 수행
</c:if>

<c:if test="${3000 < param.price}">
price가 3000보다 클때 수행
</c:if>

```

## choose

**문법**
```
<c:choose>
  <c:when test="조건1" >
    조건1일 true일때 수행
  </c:when>
  <c:when test="조건2" >
    조건 2가 true일때 수행
  </c:when>
  <c:otherwise>
    위에 나온 조건들이 모두 만족하지 않을때 실행
  </c:otherwise>
</c:choose>
```
## forEach  -  배열 및 Collection에 저장된 요소들을 차례로 수행

**문법**
```
<c:forEach var="변수" items="아이템" [begin="시작번호"] [end="끝번호"]>
${변수}
</c:forEach>

/*
var - EL에서 사용될 변수명
items - 배열, List, Iterator, Enumeration, Map 등의 Collection
begin - items에 지정한 목록에서 값을 읽어올 인덱스의 시작값
end - item에 지정한 목록에서 값을 읽어올 인덱스의 끝값

item이 Map인 경우 변수에 저장되는 객체는 Map.Entry이다.
따라서, 변수값을 사용할 때는 ${변수.key}와 ${변수.value}를 사용해서 맵에 저장된 항목의 <키, 값> 매핑에 접근할 수 있다.

*/
```

## redirect - 지정한 페이지로 리다이렉트. response.sendRedirect()와 비슷하게 사용

**문법**
```
<c:redirect url="리다이렉트할URL">
    <c:param name="파라미터이름" value="파라미터값" />
</c:redirect>

```
- url - 리다이렉트 URL
- <c:param>은 리다이렉트할 페이지에 전달할 파라미터 지정
**예제**
```
<c:redirect url="/ifTag.jsp">
    <c:param name="name" value="bk" />
</c:redirect>
```
## out - JspWriter에 데이터를 출력한다
문법
```
<c:out value="value" escapeXml="{true|false}" default="defaultValue" />

```

- value - JspWriter에 출력할 값을 나타낸다. 일반적으로 value 속성의 값은 String과 같은 문자열이다. 만약 value의 값이 - - - java.io.Reader의 한 종류라면 out 태그는 Reader로부터 데이터를 읽어와 JspWriter에 값을 출력한다.
- escapeXml - 이 속성의 값이 true일 경우 아래 표와 같이 문자를 변경한다. 생략할 수 있으며, 생략할 경우 기본값은 true이다.
- default - value 속성에서 지정한 값이 존재하지 않을 때 사용될 값을 지정한다


## catch - 태그 몸체에서 발생한 예외를 변수에 저장
**문법**
```
<c:catch var="exName">

   예외가 발생할 수 있는 코드 (에러가 발생하면 에러가 exName 변수에 저장)

   </c:catch>

   ${exName} 사용
```
-  var - 예외 객체를 저장할 변수명
