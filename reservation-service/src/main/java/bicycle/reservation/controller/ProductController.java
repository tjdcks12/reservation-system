package bicycle.reservation.controller;

import bicycle.reservation.service.CategoryService;
import bicycle.reservation.service.CommentService;
import bicycle.reservation.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class ProductController {


    private ProductService productService;
    private CategoryService categoryService;
    private CommentService commentService;

    @Autowired
    public ProductController(ProductService productService, CategoryService categoryService, CommentService commentService){
        this.productService = productService;
        this.categoryService = categoryService;
        this.commentService = commentService;
    }

    @GetMapping
    public ModelAndView mainPage(ModelAndView modelAndView) {
        modelAndView.setViewName("mainpage");
        modelAndView.addObject("categories",categoryService.getCategory());
        modelAndView.addObject("productCount",productService.getProductsCountByCategoryId(1));
        return modelAndView;
    }

    @GetMapping("/exhibition/{productId}")
    public ModelAndView productDetailPage(@PathVariable(name = "productId") Integer productId, ModelAndView modelAndView) {
            modelAndView.addObject("product",productService.getProductDetailByProductId(productId));
            modelAndView.addObject("productFiles", productService.getFilesByProductId(productId));
            modelAndView.addObject("recentComments", commentService.getRecentCommnetDto(productId));
            modelAndView.setViewName("productDetail");
        return modelAndView;
    }


}
