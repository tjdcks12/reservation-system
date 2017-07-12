package kr.or.connect.reservation.dao.sql;

/**
 * Created by ODOL on 2017. 7. 12..
 */
public class ProductSqls {
    public final static String SELECT_ALL =
            "SELECT id, category_id, name, description," +
                    " sales_start, sales_end, sales_flag," +
                    " event, create_date, modify_date" +
                    " FROM product";
    public final static String SELECT_BY_CATEGORY_ID =
            "SELECT id, category_id, name, description," +
                    " sales_start, sales_end, sales_flag," +
                    " event, create_date, modify_date" +
                    " FROM product WHERE category_id = :category_id";

}
