package kr.or.connect.reservation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by ODOL on 2017. 7. 12..
 */
@Controller
@RequestMapping("/main")
public class MainController {
    @GetMapping("/{id}")
    public String index(@PathVariable("id") int i) {
        System.out.println(i);
        return "mainpage";
    }
}
