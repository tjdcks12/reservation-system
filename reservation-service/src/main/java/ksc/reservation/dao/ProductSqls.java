package ksc.reservation.dao;

public class ProductSqls {
	final static String SELECT = "select * from product";
	final static String SELECT_BY_CATE = "select * from product where category_id =:id";
	final static String SELECT_PRODUCT = "select a.id, a.category_id, b.save_file_name, b.type, a.name, a.description, a.event FROM (select * from product) a left join (SELECT a.file_id, a.type, a.product_id, b.save_file_name FROM reservation.product_image a right join reservation.file b on a.file_id = b.id) b on a.id = b.product_id limit :start, :term";
	final static String SELECT_PRODUCT_BY_CATE ="select a.id, a.category_id, b.save_file_name, b.type, a.name, a.description, a.event FROM (select * from product where category_id =:categoryId) a left join (SELECT a.file_id, a.type, a.product_id, b.save_file_name FROM reservation.product_image a right join reservation.file b on a.file_id = b.id) b on a.id = b.product_id limit :start, :term";
	final static String SELECT_PRODUCT_COUNT = "select count(*) from product";
	final static String SELECT_PRODUCT_COUNT_BY_CATE = "select count(*) from product where category_id =:id";
}
