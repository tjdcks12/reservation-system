package bicycle.reservation.dao.sql;

public class CategorySqls {
    public static final String SELECT_CATEGORY =
            "SELECT id, name \n" +
                    "FROM category\n" +
                    "order by category_id asc";
    public static final String SELECT_CATEGORY_BY_CATEGORY_ID =
            "SELECT id, name\n" +
                    "FROM category\n" +
                    "WHERE id = :id";
}
