package bicycle.reservation.controller;

import bicycle.common.exception.CustomException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.NoHandlerFoundException;

@ControllerAdvice
public class GlobalExceptionController {

    @ExceptionHandler(CustomException.class)
    public ModelAndView handleCustomException(CustomException e) {

        ModelAndView model = new ModelAndView("error/500");
        model.addObject("errCode", e.getErrCode());
        model.addObject("errMsg", e.getErrMsg());

        return model;

    }

    @ExceptionHandler(NoHandlerFoundException.class)
    public ModelAndView handleNotFound(NoHandlerFoundException e) {
        ModelAndView modelAndView = new ModelAndView("error/404");
        return modelAndView;
    }

    @ExceptionHandler(Exception.class)
    public ModelAndView handleAllException(Exception e) {

        ModelAndView model = new ModelAndView("error/500");
        model.addObject("errMsg", "this is Exception.class");

        return model;

    }


}
