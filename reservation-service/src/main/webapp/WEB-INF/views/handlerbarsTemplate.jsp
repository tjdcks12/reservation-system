<%@ page contentType="text/html;charset=UTF-8" language="java"%>

<script id="item-template" type="text/x-handlebars-template">
<li class="item" id="product'#'{{id}}">
<a href="/detail" class="item_book">
		<div class="item_book">
			<div class="item_preview">
				<img alt="{{name}}" class="img_thumb"
					src="/resources/img/poster/{{save_file_name}}.jpg">
				<span class="img_border"></span>
			</div>
			<div class="event_txt">
				<h4 class="event_txt_tit">
					<span>{{name}}</span> <small class="sm">
						{{description}} </small>
				</h4>
				<p class="event_txt_dsc">{{content}}</p>
			</div>
</a></li>

</script>
