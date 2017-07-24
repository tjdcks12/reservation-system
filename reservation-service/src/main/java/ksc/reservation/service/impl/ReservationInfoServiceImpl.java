package ksc.reservation.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ksc.reservation.dao.ReservationInfoDao;
import ksc.reservation.domain.ReservationInfo;
import ksc.reservation.service.ReservationInfoService;

@Service
public class ReservationInfoServiceImpl implements ReservationInfoService{
	@Autowired
	ReservationInfoDao reservationInfoDao;
	
	@Override
	@Transactional(readOnly = false)
	public ReservationInfo addReservation(ReservationInfo reservationInfo) {
		int insert = reservationInfoDao.insert(reservationInfo);
		reservationInfo.setId(insert);
		return reservationInfo;
	}
}
