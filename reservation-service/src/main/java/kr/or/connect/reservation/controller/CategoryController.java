package kr.or.connect.reservation.controller;

import kr.or.connect.reservation.domain.Category;
import kr.or.connect.reservation.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

/**
 * Created by ODOL on 2017. 7. 7..
 */
@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping
    public Collection<Category> getAllCategory() {
        return categoryService.getCategories();
    }


    @PostMapping
    public Category create(@RequestParam(name="name") String name) {
        Category category = new Category();
        category.setName(name);
        category = categoryService.addCategory(category);
        return category;
    }

    @PutMapping
    public Integer update(@RequestBody Category category) {
        return categoryService.update(category);
    }


//    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @DeleteMapping("/{id}")
    @ResponseBody
    public String delete(@PathVariable("id") String id) {
        categoryService.delete(Long.parseLong(id));
        List<Category> categoryList = categoryService.getCategories();
        return "ok";
    }

}
