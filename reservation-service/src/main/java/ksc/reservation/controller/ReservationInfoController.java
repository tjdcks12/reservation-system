package ksc.reservation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import ksc.reservation.domain.ReservationInfo;
import ksc.reservation.service.ReservationInfoService;

@RestController
@RequestMapping("/api/reservations")
public class ReservationInfoController {
	@Autowired
	ReservationInfoService reservationInfoService;
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	ReservationInfo create(@RequestBody ReservationInfo reservationInfo) {
		return reservationInfoService.addReservation(reservationInfo);
	}
}
