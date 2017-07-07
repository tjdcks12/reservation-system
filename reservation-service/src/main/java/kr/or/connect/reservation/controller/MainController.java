package kr.or.connect.reservation.controller;

import kr.or.connect.reservation.dao.CategoryDao;
import kr.or.connect.reservation.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by ODOL on 2017. 7. 7..
 */
@Controller
@RequestMapping("/")
public class MainController {
    @Autowired
    CategoryService CategoryService;
    @GetMapping
    public String index(Model model) {
        model.addAttribute("categories", CategoryService.getCategories());
        return "index";
    }
}
