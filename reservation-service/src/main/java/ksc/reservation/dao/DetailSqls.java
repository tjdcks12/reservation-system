package ksc.reservation.dao;

public class DetailSqls {
	final static String SELECT_DETAIL = "SELECT a.id, a.name, b.content, a.event, a.sales_flag FROM (select * from product where id=:id) a left join product_detail b on a.id=b.product_id";
	
}
