<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<title>file등록 폼</title>
</head>
<body>
	<form method="get" action="/files/get">
<!--
		<select name="product_list">
			<c:forEach var="product" items="${productList}">
				<option class="categoryList_update" value="${product.id}">${product.id} : ${product.name}</option>
			</c:forEach>
		</select> <input type="submit" value="선택"> <br>
		<br>
		<br>
 
		<c:forEach var="productImage" items="${productImageList}">
			<li class="categoryList">${productImage.file_id}:
				${productImage.save_file_name}</li>
		</c:forEach>
		 -->
		
	</form>

	<form method="post" action="/files" enctype="multipart/form-data">
	<select name="type">
		<option value="product">product</option>
		<option value="comment">comment</option>
	</select>
	<br>
	<br>
		image 넣기 <input type="file" name="file"><br><br> 
		
		<input type="submit" value="등록">
	</form>

</body>
</html>