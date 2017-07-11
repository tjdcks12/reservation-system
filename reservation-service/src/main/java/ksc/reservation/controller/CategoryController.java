package ksc.reservation.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import ksc.reservation.domain.Category;
import ksc.reservation.service.CategoryService;

@Controller
@RequestMapping("/categories")
public class CategoryController {
	
	
	@Autowired
	private CategoryService categoryService;
	
	
	
	@PostMapping
	public String create(@ModelAttribute Category categoryParam) {
		if(categoryParam.getName() == null || categoryParam.getName().length() == 0) {
			return "redirect:/";
		}
		else {
			Category category = new Category();
			category.setName(categoryParam.getName());
			Category resultCategory = categoryService.addCate(category);
			return "redirect:/";
		}
	}
	
	
	
}
