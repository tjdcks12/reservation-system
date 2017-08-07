package bicycle.reservation.dao.sql;

public class ProductSqls {
    public static final String SELECT_PRODUCTDTO_IN_PAGE =
            "select a.id product_id, min(file_id) file_id, description, name\n" +
                    "from product a, product_detail b, product_image c\n" +
                    "where a.id = b.product_id and b.product_id = c.product_id\n" +
                    "group by product_id order by product_id desc\n" +
                    "limit :page, :count";


}
