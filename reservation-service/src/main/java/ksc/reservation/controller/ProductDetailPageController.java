package ksc.reservation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/detail")
public class ProductDetailPageController {
	
	@GetMapping
	public String ProductDetailPage() {
		return "detail";
	}
	
	@GetMapping("/items")
	public String ReservePage() {
		return "reserve";
	}

}
