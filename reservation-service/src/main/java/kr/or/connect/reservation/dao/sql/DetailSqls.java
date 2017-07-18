package kr.or.connect.reservation.dao.sql;

/**
 * Created by ODOL on 2017. 7. 17..
 */
public class DetailSqls {
    public final static String SELECT_FILES_BY_PRODUCT_ID =
            "SELECT P.id, P.category_id, P.event, PD.content, P.name, F.save_file_name" +
                    " FROM product AS P" +
                    " JOIN product_image AS PI" +
                    " ON P.id = PI.product_id" +
                    " JOIN product_detail AS PD" +
                    " ON p.id = PD.product_id" +
                    " JOIN file AS F" +
                    " ON F.id = PI.file_id" +
                    " WHERE P.id = :id";

    public final static String SELECT_REVIEWS_BY_PRODUCT_ID_USE_LIMIT =
            "SELECT RUC.id, RUC.product_id, U.username, RUC.score, RUC.comment, MAX(F.save_file_name) save_file_name, COUNT(F.id) count" +
                    " FROM reservation_user_comment AS RUC" +
                    " LEFT JOIN reservation_user_comment_image AS RUCI" +
                    " ON RUC.id = RUCI.reservation_user_comment_id" +
                    " LEFT JOIN file AS F" +
                    " ON F.id = RUCI.file_id" +
                    " JOIN users AS U" +
                    " ON RUC.user_id = U.id" +
                    " GROUP BY RUC.id" +
                    " HAVING RUC.product_id = :id" +
                    " LIMIT 0, 3";

    public final static String SELECT_REVIEWS_BY_PRODUCT_ID =
            "SELECT RUC.id, RUC.product_id, U.username, RUC.score, RUC.comment, MAX(F.save_file_name) save_file_name, COUNT(F.id) count" +
                    " FROM reservation_user_comment AS RUC" +
                    " LEFT JOIN reservation_user_comment_image AS RUCI" +
                    " ON RUC.id = RUCI.reservation_user_comment_id" +
                    " LEFT JOIN file AS F" +
                    " ON F.id = RUCI.file_id" +
                    " JOIN users AS U" +
                    " ON RUC.user_id = U.id" +
                    " GROUP BY RUC.id" +
                    " HAVING RUC.product_id = :id";


}
