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
public class CategoryAdminController {

	@Autowired
	private CategoryService categoryService;
	@GetMapping
	public String categories(HttpServletRequest request) {
		
		request.setAttribute("categories", categoryService.get());
		return "categories";
	}

	@PostMapping
	public String create(@ModelAttribute Category categoryParam) {
		if (categoryParam.getName() == null || categoryParam.getName().length() == 0) {
			return "redirect:/categories";
		} else {
			Category category = new Category();
			category.setName(categoryParam.getName());
			Category resultCategory = categoryService.addCate(category);
			return "redirect:/categories";
		}
	}

	@GetMapping("/delete")
	public String delete(@RequestParam(name = "id") Integer id) {
		categoryService.delete(id);
		return "redirect:/categories";
	}

	@GetMapping("/modify")
	public String modify(@ModelAttribute Category categoryParam) {
		if (categoryParam.getName() == null || categoryParam.getName().length() == 0) {
			return "redirect:/categories";
		} else {
			categoryService.update(categoryParam);
			return "redirect:/categories";
		}
	}

}
