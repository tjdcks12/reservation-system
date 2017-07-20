package ksc.reservation.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/reservation")
public class MyReservationController {
	@GetMapping
	public String index(HttpServletRequest request, HttpSession session) {
			return "myreservation";
	}
}
