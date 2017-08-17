package bicycle.reservation.controller;


import bicycle.reservation.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/exhibition")
public class ReservationController {

    private ProductService productService;

    @Autowired
    ReservationController(ProductService productService){
        this.productService = productService;
    }

    @GetMapping("{productId}/reserve")
    public ModelAndView reservePage(@PathVariable(name = "productId") Integer productId, ModelAndView modelAndView) {
        modelAndView.addObject("product", productService.getProductDetailByProductId(productId));
        modelAndView.addObject("productPrices", productService.getProductPricesByProductId(productId));
        modelAndView.setViewName("reserve");
        return modelAndView;
    }
}
