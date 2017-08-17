package bicycle.reservation.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/exhibition")
public class ReservationController {
    
    @Autowired
    ReservationController(){

    }

    @GetMapping("{productId}/reserve")
    public ModelAndView reservePage(@PathVariable(name = "productId") Integer productId, ModelAndView modelAndView) {
        modelAndView.setViewName("reserve");
        return modelAndView;
    }
}
