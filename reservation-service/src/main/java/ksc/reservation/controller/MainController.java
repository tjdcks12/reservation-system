package ksc.reservation.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import ksc.reservation.service.CategoryService;


@Controller
@RequestMapping("/")
public class MainController {
	
	@Autowired
	private CategoryService categoryService;
	
	@GetMapping
	public String index(HttpServletRequest req) {
		req.setAttribute("categories", categoryService.get());
		return "index";
	}
	
}
