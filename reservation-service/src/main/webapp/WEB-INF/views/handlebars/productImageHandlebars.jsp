<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<script id="image-template" type="text/x-handlebars-template">
{{#.}}
<li class="item" style="width: 414px;"><img alt=""
	class="img_thumb"
	src="/files/product/{{product_id}}/{{file_id}}">
	<span class="img_bg"></span>
	<div class="visual_txt">
		<div class="visual_txt_inn">
			<h2 class="visual_txt_tit">
				<span></span>
			</h2>
			<p class="visual_txt_dsc"></p>
		</div>
	</div></li>
{{/.}}
</script>