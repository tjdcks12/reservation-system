package kr.or.connect.reservation.controller;

import kr.or.connect.reservation.domain.Category;
import kr.or.connect.reservation.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by ODOL on 2017. 7. 7..
 */
@Controller
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @PostMapping
    public String create(@RequestParam(name="name") String name) {
        Category category = new Category();
        category.setName(name);
        category = categoryService.addCategory(category);
        System.out.println(category);
        return "/";
    }

    @DeleteMapping
    public String delete(@RequestParam(name="id") Long id) {
        categoryService.delete(id);
        return "/";
    }

    @GetMapping
    public String selectAll(Model model) {
        model.addAttribute("categories", categoryService.getCategories());
        return "redirect:/";
    }
}
