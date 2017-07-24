package ksc.reservation.dao;

public class NaverLoginSqls {
	
	final static String DUPLICATE_CHECK= "SELECT sns_id FROM reservation.users where sns_id=:snsId;";
	final static String SELECT_USER_ID_BY_SNSID = "SELECT id FROM users where sns_id=:snsId";

}
