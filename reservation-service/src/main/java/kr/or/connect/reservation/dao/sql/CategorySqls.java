package kr.or.connect.reservation.dao.sql;

/**
 * Created by ODOL on 2017. 7. 7..
 */
public class CategorySqls {
    public final static String SELECT_ALL =
            "SELECT id, name FROM category";
    public final static String SELECT_BY_ID =
            "SELECT id, name FROM category WHERE id = :id";
    public final static String DELECT_BY_ID =
            "DELETE FROM category WHERE id = :id";
    public final static String UPDATE_BY_ID =
            "UPDATE category SET\n"
                    + "name = :name "
                    + "WHERE id = :id";
}
