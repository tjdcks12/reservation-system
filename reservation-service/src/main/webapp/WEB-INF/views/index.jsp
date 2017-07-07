<%@ page import="kr.or.connect.reservation.domain.Category" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: ODOL
  Date: 2017. 7. 7.
  Time: PM 3:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>Title</title>
</head>
<body>
category input
<form method="post" action="/category">
    category name : <input type="text" name="name"><br>
    <input type="submit" value="확인">
</form>

<c:if test="${categories != null}">
    <c:forEach items="${categories}" var="category">
        <c:out value="${category.name}"> </c:out>
    </c:forEach>
</c:if>
</body>
</html>