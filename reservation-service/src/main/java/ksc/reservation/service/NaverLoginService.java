package ksc.reservation.service;

import ksc.reservation.domain.Users;

public interface NaverLoginService {
	public Users addUser(Users user);
	public boolean duplicateId(int snsId);
	public int getUserId(int snsId);
	
}
