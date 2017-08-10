package bicycle.reservation.dao.sql;

public class ProductSqls {
    public static final String SELECT_PRODUCTDTO_IN_PAGE =
            "select a.id product_id, min(file_id) file_id, max(c.place_name) place_name, a.description, a.name\n" +
                    "from product a, product_image b, display_info c\n" +
                    "where a.id = b.product_id and a.id = c.product_id\n" +
                    "group by a.id order by a.id desc\n" +
                    "limit :page, :count";
    public static final String SELECT_PRODUCTDTO_IN_PAGE_BY_CATEGORYID =
            "select a.id product_id, min(file_id) file_id, max(c.place_name) place_name, a.description, a.name\n" +
                    "from product a, product_image b, display_info c\n" +
                    "where a.id = b.product_id and a.id = c.product_id AND a.category_id = :categoryId\n" +
                    "group by a.id order by a.id desc\n" +
                    "limit :page, :count";
    public static final String SELECT_PRODUCTDETAILDTO_BY_PRODUCT_ID =
            "select b.product_id, name, description, event, place_name, place_lot, place_street, tel, homepage, email \n" +
                    "from product a, product_detail b, display_info c \n" +
                    "where a.id=b.product_id and b.product_id = c.product_id and a.id =:productId";
    public static final String SELECT_ALL_PRODUCTS_COUNT =
            "SELECT count(*)\n" +
                    "FROM reservation.product";
    public static final String SELECT_PRODUCTS_COUNT_BY_CATEGORY_ID =
            "SELECT count(*)\n" +
                    "FROM reservation.product where category_id= :categoryId";

}
