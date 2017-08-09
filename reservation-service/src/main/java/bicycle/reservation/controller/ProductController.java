package bicycle.reservation.controller;

import bicycle.reservation.model.domain.Category;
import bicycle.reservation.service.CategoryService;
import bicycle.reservation.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/")
public class ProductController {

    @Autowired
    ProductService productService;
    @Autowired
    CategoryService categoryService;


    @GetMapping
    public ModelAndView mainPage(ModelAndView modelAndView) {
        modelAndView.setViewName("mainpage");
        modelAndView.addObject("categories",categoryService.getCategory());
        return modelAndView;
    }



}
