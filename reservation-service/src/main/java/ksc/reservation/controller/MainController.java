package ksc.reservation.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import ksc.reservation.naverlogin.oauth.bo.NaverLoginBO;
import ksc.reservation.service.CategoryService;

@Controller
@RequestMapping("/")
public class MainController {
	private NaverLoginBO naverLoginBO;
	@Autowired
	private CategoryService categoryService;

	@Autowired
	private void setNaverLoginBO(NaverLoginBO naverLoginBO) {
		this.naverLoginBO = naverLoginBO;
	}

	@GetMapping
	public String index(HttpServletRequest req) {
		req.setAttribute("categories", categoryService.get());
		return "index";
	}

}
