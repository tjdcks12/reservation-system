package ksc.reservation.dao;

public class ReservationPriceSqls {
	final static String SELECT_PRICE_BY_PRODUCT_ID = "SELECT price_type, price, discount_rate FROM product_price where product_id=:productId";
}
