package bicycle.reservation.dao.sql;

public class ProductSqls {
    public static final String SELECT_PRODUCTDTO_IN_PAGE =
            "SELECT a.id product_id, (SELECT file_id FROM product_image pi WHERE pi.product_id = a.id ORDER BY pi.file_id ASC LIMIT 1) file_id, b.place_name, a.description, a.name " +
                    "FROM product a, display_info b " +
                    "WHERE a.id = b.product_id " +
                    "ORDER BY a.id DESC " +
                    "LIMIT :page, :count";
    public static final String SELECT_PRODUCTDTO_IN_PAGE_BY_CATEGORYID =
            "SELECT a.id product_id, (SELECT file_id FROM product_image pi WHERE pi.product_id = a.id ORDER BY pi.file_id ASC LIMIT 1) file_id, b.place_name, a.description, a.name " +
                    "FROM product a, display_info b " +
                    "WHERE a.id = b.product_id AND a.category_id = :categoryId " +
                    "ORDER BY a.id DESC " +
                    "LIMIT :page, :count";
    public static final String SELECT_PRODUCTDETAILDTO_BY_PRODUCT_ID =
            "SELECT b.product_id, name, description, event, place_name, place_lot, place_street, tel, homepage, email " +
                    "FROM product a, product_detail b, display_info c  " +
                    "WHERE a.id=b.product_id AND b.product_id = c.product_id AND a.id =:productId";
    public static final String SELECT_ALL_PRODUCTS_COUNT =
            "SELECT count(*) " +
                    "FROM reservation.product";
    public static final String SELECT_PRODUCTS_COUNT_BY_CATEGORY_ID =
            "SELECT count(*) " +
                    "FROM reservation.product WHERE category_id= :categoryId";

    public static final String SELECT_PRODUCT_PRICES_BY_PRODUCT_ID =
            "SELECT id, price, price_type, product_id, discount_rate, create_date, modify_date " +
                    "FROM reservation.product_price " +
                    "WHERE product_id=:productId";
}
