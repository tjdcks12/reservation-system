package bicycle.reservation.dao.sql;

public class ReservationUserCommentImageSqls {
    public static final String SELECT_BY_COMMENT_ID =
            "SELECT file_id " +
                    "FROM reservation_user_comment_image " +
                    "WHERE reservation_user_comment_id = :commentId";
}
