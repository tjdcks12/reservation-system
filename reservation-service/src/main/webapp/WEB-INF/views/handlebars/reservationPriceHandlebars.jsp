<%@ page contentType="text/html;charset=UTF-8" language="java"%>

<script id="reservation-template" type="text/x-handlebars-template">
<div class="qty">
	<div class="count_control">
		<!-- [D] 수량이 최소 값이 일때 ico_minus3, count_control_input에 disabled 각각 추가, 수량이 최대 값일 때는 ico_plus3에 disabled 추가 -->
		<div class="clearfix">
			<a href="#" class="btn_plus_minus spr_book2 ico_minus3 disabled"
				title="빼기"> </a> <input type="tel"
				class="count_control_input disabled" value="0" readonly title="수량" data-type="{{priceType}}">
			<a href="#" class="btn_plus_minus spr_book2 ico_plus3" title="더하기">
			</a>
		</div>
		<!-- [D] 금액이 0 이상이면 individual_price에 on_color 추가 -->
		<div class="individual_price">
			<span class="total_price">0</span><span class="price_type">원</span>
		</div>
	</div>
	<div class="qty_info_icon">
		<strong class="product_amount"> <span>{{priceTypeName}}</span>
		</strong> <strong class="product_price"> <span class="price">{{price}}</span>
			<span class="price_type">원</span>
		</strong> <em class="product_dsc">{{discountedPrice}}원 ({{discountRate}}% 할인가)</em>
	</div>
</div>
</script>