package kr.or.connect.reservation.dao.sql;

/**
 * Created by ODOL on 2017. 7. 12..
 */
public class ProductSqls {
    public final static String SELECT_ALL_LIMIT =
            "SELECT P.id, P.category_id, P.name, P.description, DI.place_name , MAX(F.file_name) file_name, MAX(F.save_file_name) save_file_name"
                    + " FROM product AS P"
                    + " JOIN display_info AS DI"
                    + " ON DI.id = P.id"
                    + " JOIN product_image AS PI"
                    + " ON P.id = PI.product_id"
                    + " JOIN file AS F"
                    + " ON F.id = PI.file_id"
                    + " GROUP BY P.id"
                    + " LIMIT :offset, :limit";

    public final static String SELECT_ALL =
            "SELECT P.id, P.category_id, P.name, P.description, DI.place_name , MAX(F.file_name) file_name, MAX(F.save_file_name) save_file_name"
                    + " FROM product AS P"
                    + " JOIN display_info AS DI"
                    + " ON DI.id = P.id"
                    + " JOIN product_image AS PI"
                    + " ON P.id = PI.product_id"
                    + " JOIN file AS F"
                    + " ON F.id = PI.file_id"
                    + " GROUP BY P.id";

    public final static String SELECT_BY_CATEGORY =
            "SELECT P.id, P.category_id, P.name, P.description, DI.place_name , MAX(F.file_name) file_name, MAX(F.save_file_name) save_file_name"
                    + " FROM product AS P"
                    + " JOIN display_info AS DI"
                    + " ON DI.id = P.id"
                    + " JOIN product_image AS PI"
                    + " ON P.id = PI.product_id"
                    + " JOIN file AS F"
                    + " ON F.id = PI.file_id"
                    + " WHERE P.category_id = :category"
                    + " GROUP BY P.id"
                    + " LIMIT :offset, :limit";

}
