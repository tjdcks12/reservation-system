package bicycle.reservation.dao.sql;

public class CategorySqls {
    public static final String SELECT_CATEGORY =
            "SELECT id, name  " +
                    "FROM category " +
                    "ORDER BY id ASC";
    public static final String SELECT_CATEGORY_BY_CATEGORY_ID =
            "SELECT id, name " +
                    "FROM category " +
                    "WHERE id = :id";
}
