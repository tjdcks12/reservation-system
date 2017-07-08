package kr.or.connect.reservation.controller;

import kr.or.connect.reservation.domain.Category;
import kr.or.connect.reservation.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
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
        return "redirect:/";
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
//    @DeleteMapping("/{id}")
    @ResponseBody
    public String delete(@PathVariable String id) {
        categoryService.delete(Long.parseLong(id));
        List<Category> categoryList = categoryService.getCategories();
        return "ok";
    }
}
