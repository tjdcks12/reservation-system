package bicycle.reservation.controller;

import bicycle.reservation.service.impl.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class ProductController {
    @Autowired
    ProductServiceImpl productService;

    @GetMapping
    public ModelAndView mainPage(){

        return new ModelAndView("mainpage");
    }

}
