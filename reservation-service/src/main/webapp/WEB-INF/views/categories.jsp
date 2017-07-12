<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>카테고리 리스트</title>
</head>
<body>
	<strong> 카테고리 리스트 </strong>
	<br>
	<br> 삭제하려면 클릭하세요
	<ul>
		<c:forEach var="category" items="${categories}">
			<li class="categoryList" id="${category.id }">${category.name}</li>
		</c:forEach>
	</ul>

	<br>
	<br>
	<br> 업데이트 할것을 선택하세요
	<ul>

		<select name="modify_cate">
			<c:forEach var="category" items="${categories}">
				<option class="categoryList_update" id="${category.id}">${category.name}</option>
			</c:forEach>
		</select>
	</ul>

	<br> 수정할 내용을 입력하세요
	<input type="text" id="name">
	<input type="button" class="modifyButton" value="확인">

	<br>
	<br>
	<br>

	<br>
	<br>
	<br> 생성할 카테고리를 입력해주세요
	<br>
	<br>
	<form method="post" action="categories">
		생성할 카테고리명 : <input type="text" name="name"> <input
			type="submit" value="확인">

	</form>

</body>
</html>

<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="/resources/js/app.js"></script>