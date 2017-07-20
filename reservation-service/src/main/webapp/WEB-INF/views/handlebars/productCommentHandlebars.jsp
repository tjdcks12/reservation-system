<%@ page contentType="text/html;charset=UTF-8" language="java"%>

<script id="item-template" type="text/x-handlebars-template">

<li class="list_item" data-detail-comment-number="{{id}}">
	<div>
		<div class="review_area">
		{{#if file_id}}
			<div class="thumb_area">
				<a href="#" class="thumb" title="이미지 크게 보기"> <img width="90"
					height="90" class="img_vertical_top"
					src="/files/comment/{{id}}/{{file_id}}">
				</a> <span class="img_count">{{count}}</span>
			</div>
		{{/if}}
			<h4 class="resoc_name"></h4>
			<p class="review">{{comment}}</p>
		</div>
		<div class="info_area">
			<div class="review_info">
				<span class="grade">{{score}}.0</span> <span class="name">{{userName}}***</span> <span
					class="date">{{createDate}} 방문</span>
			</div>
		</div>
	</div>
</li>

</script>

