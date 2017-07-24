package ksc.reservation.service;

import java.util.List;

import ksc.reservation.dto.ReservationPriceDto;

public interface ReservationPriceService {
	public List<ReservationPriceDto> getPrice(int productId);

}
