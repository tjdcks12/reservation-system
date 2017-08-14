package bicycle.reservation.controller;

import bicycle.reservation.model.dto.ProductDto;
import bicycle.reservation.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class RestProductController {

    private ProductService productService;

    @Autowired
    public RestProductController(ProductService productService) {

        this.productService = productService;
    }

    @GetMapping("/categories/{categoryId}/pages/{page}")
    public List<ProductDto> getProductsByCategoryInPage(@PathVariable("page") Integer page, @PathVariable("categoryId") Integer categoryId) {
        return productService.getProducts(page,categoryId);
    }

    @GetMapping("/categories/{categoryId}/count")
    public Integer getProductsCountByCategoryId(@PathVariable("categoryId") Integer categoryId){
        return productService.getProductsCountByCategoryId(categoryId);
    }


}
