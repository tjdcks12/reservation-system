package ksc.reservation.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import ksc.reservation.domain.Category;
import ksc.reservation.service.CategoryService;

@Controller
@RequestMapping("/")
public class MainController {
	@Autowired
	private CategoryService categoryService;

	@GetMapping
	public String index(HttpServletRequest request) {
		request.setAttribute("categories", categoryService.get());
		return "index";
	}

	@GetMapping("/delete")
	public String delete(@RequestParam(name = "id") Integer id) {
		categoryService.delete(id);
		return "redirect:/";
	}

	@GetMapping("/modify")
	public String modify(@ModelAttribute Category categoryParam) {
		if (categoryParam.getName() == null || categoryParam.getName().length() == 0) {
			return "redirect:/";
		} else {
			categoryService.update(categoryParam);
			return "redirect:/";
		}
	}

}
