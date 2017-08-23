package bicycle.reservation.controller;


import bicycle.reservation.aop.LoggingAdvice;
import bicycle.reservation.model.domain.ReservationInfo;
import bicycle.reservation.service.ProductService;
import bicycle.reservation.service.ReservationInfoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;

@Controller
@RequestMapping("/exhibition")
public class ReservationController {

    private static final Logger logger = LoggerFactory.getLogger(LoggingAdvice.class);

    private ProductService productService;
    private ReservationInfoService reservationInfoService;
    @Autowired
    ReservationController(ProductService productService, ReservationInfoService reservationInfoService){
        this.productService = productService;
        this.reservationInfoService = reservationInfoService;
    }

    @GetMapping("{productId}/reserve")
    public ModelAndView reservePage(@PathVariable(name = "productId") Integer productId, ModelAndView modelAndView) {
        modelAndView.addObject("product", productService.getProductDetailByProductId(productId));
        modelAndView.addObject("productPrices", productService.getProductPricesByProductId(productId));
        modelAndView.setViewName("reserve");
        return modelAndView;
    }

    @PostMapping("/{productId}/reserve")
    public String reserve(@PathVariable Integer productId, @Valid ReservationInfo reservationInfo, BindingResult bindingResult) {
        logger.info("==============Reserve 시작==============");
        if (bindingResult.hasErrors()) {
            logger.error("=============Reserve 실패==============");
            return "redirect:/";
        }
        reservationInfoService.addReservationInfo(reservationInfo);
        logger.info("==============Reserve 성공==============");
        return "redirect:/"; // 성공 부분
    }

}
