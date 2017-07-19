package ksc.reservation.dao;

public class FileSqls {
	final static String SELECT_ALL_PRODUCT = "SELECT id, name FROM product";
	final static String SELECT_ALL_IMAGE_LIST = "SELECT a.*, b.save_file_name FROM product_image a left join file b on a.file_id = b.id";
	final static String SELECT_IMAGE_LIST_BY_PRODUCT = "SELECT a.*, b.save_file_name FROM (select * from product_image where product_id=:id) a left join file b on a.file_id = b.id";
	
	//downloading image query
	final static String SELECT_SAVE_FILE_NAME_BY_PRODUCT = "SELECT a.product_id, a.file_id, b.* FROM (select * from product_image where product_id =:id and file_id=:fileId) a left join file b on a.file_id=b.id order by product_id asc";
	final static String SELECT_SAVE_FILE_NAME_BY_COMMENT = "SELECT a.reservation_user_comment_id, a.file_id, b.* FROM (select * from reservation_user_comment_image where reservation_user_comment_id =:id and file_id=:fileId) a left join file b on a.file_id=b.id order by reservation_user_comment_id asc";
}
