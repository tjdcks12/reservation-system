package kr.or.connect.reservation.dao;

/**
 * Created by ODOL on 2017. 7. 7..
 */
public class CategorySqls {
    final static String SELECT_ALL = "select * from category";
    final static String SELECT_BY_ID = "select * from category where id = :id";
    final static String DELECT_BY_ID = "delete from category where id = :id";
}
