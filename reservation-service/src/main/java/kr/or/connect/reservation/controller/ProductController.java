package kr.or.connect.reservation.controller;

import kr.or.connect.reservation.dto.ProductDto;
import kr.or.connect.reservation.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Created by ODOL on 2017. 7. 12..
 */
@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("/count")
    public Integer getProductsCount() {
        return productService.getProductsCount();
    }

    @GetMapping
    public Collection<ProductDto> getProducts(
            @RequestParam Integer offset,
            @RequestParam Integer limit) {
        return productService.getProducts(offset, limit);
    }

    @GetMapping("/{category}/**")
    public Collection<ProductDto> getProductsByCategory(
            @PathVariable("category") Integer category,
            @RequestParam Integer offset,
            @RequestParam Integer limit) {
        return productService.getProductsByCategory(category, offset, limit);
    }
}
