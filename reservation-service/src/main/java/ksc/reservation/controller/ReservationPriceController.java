package ksc.reservation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import ksc.reservation.dto.ReservationPriceDto;
import ksc.reservation.service.ReservationPriceService;


@RestController
@RequestMapping("/api/reservationInforms")
public class ReservationPriceController {
	@Autowired
	private ReservationPriceService reservationService;
	
	
	@GetMapping("/price/{productId}")
	public List<ReservationPriceDto> getPrice(@PathVariable int productId){
		return reservationService.getPrice(productId);
	}
}
