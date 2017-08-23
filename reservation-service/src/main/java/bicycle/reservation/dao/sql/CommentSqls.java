package bicycle.reservation.dao.sql;

public class CommentSqls {
    public static final String SELECT_RECENT_COMMENTS_BY_PRODUCT_ID =
            "SELECT a.id, a.comment, a.score, b.username, a.create_date, (SELECT file_id FROM reservation.reservation_user_comment_image uci WHERE a.id = uci.reservation_user_comment_id LIMIT 1) file_id, (SELECT COUNT(*) FROM reservation.reservation_user_comment_image uci WHERE a.id = uci.reservation_user_comment_id) file_count " +
                    "FROM (SELECT id, user_id, comment, score, create_date from reservation_user_comment WHERE product_id =:productId) a " +
                    "JOIN users b " +
                    "ON a.user_id = b.id " +
                    "ORDER BY create_date desc " +
                    "LIMIT :page, :count";

    public static final String SELECT_AVERAGE_SCORE_BY_PRO_ID =
            "SELECT avg(score) " +
                    "FROM reservation_user_comment " +
                    "WHERE product_id = :productId";
    public static final String SELECT_PRODUCT_COUNT_BY_PRO_ID =
            "SELECT count(*) " +
                    "FROM reservation_user_comment " +
                    "WHERE product_id = :productId";

}
