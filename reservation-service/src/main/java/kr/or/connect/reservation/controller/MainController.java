package kr.or.connect.reservation.controller;

import kr.or.connect.reservation.dao.CategoryDao;
import kr.or.connect.reservation.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by ODOL on 2017. 7. 7..
 */
@RestController
//@Controller
@RequestMapping("/")
public class MainController {
    @Autowired
    CategoryService CategoryService;
    @GetMapping
    public String index(Model model) {
//        System.out.println("get mapping");
//        System.out.println(CategoryService.getCategories());
//        model.addAttribute("categories", CategoryService.getCategories());
        return "mainpage";
    }



}
