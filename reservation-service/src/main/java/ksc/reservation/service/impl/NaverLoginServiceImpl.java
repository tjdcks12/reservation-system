package ksc.reservation.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ksc.reservation.dao.NaverLoginDao;
import ksc.reservation.domain.Users;
import ksc.reservation.service.NaverLoginService;

@Service
public class NaverLoginServiceImpl implements NaverLoginService{
	
	@Autowired
	NaverLoginDao naverLoginDao;
	//db에 유저 add하는거 해야되고 그다음엔 dao작성, controller 작성
	
	@Override
	@Transactional(readOnly = false)
	public Users addUser(Users user) {
		int insert = naverLoginDao.insert(user);
		user.setId(insert);
		return user;
	}
	
	@Override
	@Transactional(readOnly = true)
	public boolean duplicateId(int snsId) {
		return naverLoginDao.duplicateCheck(snsId);
	}
	
	@Override
	@Transactional(readOnly = true)
	public int getUserId(int snsId) {
		return naverLoginDao.getUserId(snsId);
	}
}
