package ksc.reservation.dao;

public class NaverLoginSqls {
	
	final static String DUPLICATE_CHECK= "SELECT sns_id FROM reservation.users where sns_id=:snsId;";


}
