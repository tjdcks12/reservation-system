<%-- Created by IntelliJ IDEA.
User: ODOL
Date: 2017. 7. 7.
Time: PM 3:18
To change this template use File | Settings | File Templates.
--%>
<%@ page import="kr.or.connect.reservation.domain.Category" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>Title</title>
</head>
<body>
<div class="body_wrapper">
    <div class="category_input_wrapper">
        <div class="category_input">
            category input
            <form method="post" action="/category">
                category name : <input type="text" name="name"><br>
                <input type="submit" value="확인">
            </form>
        </div>
    </div>
    <div class="category_select">
        <c:if test="${categories != null}">
            <div class="category_list_wrapper">
                <ul>
                    <c:forEach items="${categories}" var="category">
                        <li data-id="${category.id}">
                            <button class="delete"><c:out value="${category.name}"/></button>
                        </li>
                    </c:forEach>
                </ul>
            </div>
        </c:if>
    </div>
</div>

<script src='http://code.jquery.com/jquery-latest.min.js'></script>
</body>

<script>


    var API_URI = "/category";

    (function (window) {
        'use strict';

        var $categoryListWrapper = $(".category_list_wrapper");

        var categoryFunctions = {
            init: function () {
                this.bindClickEvent();
            },
            bindClickEvent: function () {
                $categoryListWrapper.on('click', '.delete',categoryFunctions.removeCategory);
            },
            removeCategory: function (event) {
                event.preventDefault();
                var li = $(this).closest('li')
                var id = $(li).attr('data-id');
                var rowId = $(li).data('id');
                var result = categoryFunctions.deleteAjax(id);
                result.then(function () {
                    $(li).remove();
                })
            },
            deleteAjax: function (id) {
                return $.ajax({
                    url: API_URI+"/"+id,
                    type: "delete"
                });
            }
        };

        categoryFunctions.init();
    })(window)


</script>

</html>