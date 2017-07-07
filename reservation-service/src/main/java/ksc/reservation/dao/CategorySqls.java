package ksc.reservation.dao;

public class CategorySqls {
	final static String SELECT = "select * from category";
	final static String DELETE_BY_ID = "delete from category where id = :id";
	final static String UPDATE_BY_ID = "update category set name = :name where id =:id";
	

}
