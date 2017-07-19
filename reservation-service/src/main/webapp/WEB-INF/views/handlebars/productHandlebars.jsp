<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<script src="/resources/js/node_modules/handlebars/dist/handlebars.min.js"></script>
<script id="item-template" type="text/x-handlebars-template">

<li class="item" id="product'#'{{id}}">
<a href="/detail?productid={{id}}" class="item_book">
		<div class="item_book">
			<div class="item_preview">
				<img alt="{{name}}" class="img_thumb"
					src="/files/product/{{id}}/{{file_id}}">
				<span class="img_border"></span>
			</div>
			<div class="event_txt">
				<h4 class="event_txt_tit">
					<span>{{name}}</span> <small class="sm">
						{{place_name}} </small>
				</h4>
				<p class="event_txt_dsc">{{description}}</p>
			</div>
</a></li>

</script>
