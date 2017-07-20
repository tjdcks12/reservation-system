package ksc.reservation.dao;

public class DetailSqls {
	final static String SELECT_DETAIL = "SELECT a.id, a.name, a.description, a.event, a.sales_flag, b.tel, b.homepage, b.email from (SELECT * FROM reservation.product where id=:productId) a left join display_info b on a.id = b.product_id;";
	final static String SELECT_COMMENT = "SELECT a.*, b.file_id FROM (select * from (select a.id, b.username, a.product_id, a.score, a.comment, a.create_date, a.modify_date from reservation_user_comment a left join users b on a.user_id = b.id)temp where product_id=:productId)a left join reservation_user_comment_image b on a.id = b.reservation_user_comment_id group by id order by create_date desc limit :start, :term";
	final static String SELECT_COMMENT_COUNT = "SELECT count(*) FROM reservation.reservation_user_comment where product_id=:product_id";
	final static String SELECT_COMMENT_SCORE = "SELECT avg(score) FROM reservation.reservation_user_comment where product_id=:product_id";

	// 이미지 다운로딩을 위해 받을 id값들 - product
	final static String SELECT_PRODUCT_IMAGE_ID = "SELECT product_id, file_id FROM reservation.product_image where product_id=:id";
	// 이미지 다운로딩을 위해 받을 id값들 - comment
	final static String SELECT_COMMENT_IMAGE_ID = "SELECT a.id, b.product_id, a.reservation_user_comment_id, a.file_id FROM reservation_user_comment_image a inner join (select * from reservation_user_comment where product_id=:productId) b on a.reservation_user_comment_id = b.id and reservation_user_comment_id=:commentId;";

	final static String SELECT_PRODUCT_IMAGE_COUNT = "SELECT count(*) FROM reservation.product_image where product_id=:id";
	final static String SELECT_COMMENT_IMAGE_COUNT = "SELECT count(*) FROM reservation_user_comment_image a inner join (select * from reservation_user_comment where product_id=:productId) b on a.reservation_user_comment_id = b.id and reservation_user_comment_id=:commentId";

	//display 정보 받기
	final static String SELECT_DISPLAY_INFO = "SELECT id, product_id, place_name, place_lot, place_street, tel, homepage, email FROM reservation.display_info where product_id=:productId";
	
	
}
