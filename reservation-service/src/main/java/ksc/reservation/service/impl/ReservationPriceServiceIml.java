package ksc.reservation.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ksc.reservation.dao.ReservationPriceDao;
import ksc.reservation.dto.ReservationPriceDto;
import ksc.reservation.service.ReservationPriceService;

@Service
public class ReservationPriceServiceIml implements ReservationPriceService{
	
	@Autowired
	ReservationPriceDao reservationDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<ReservationPriceDto> getPrice(int productId){
		return reservationDao.selectPrice(productId);
	}

}
