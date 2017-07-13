package kr.or.connect.reservation.controller;

import kr.or.connect.reservation.domain.Product;
import kr.or.connect.reservation.dto.ProductDto;
import kr.or.connect.reservation.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

/**
 * Created by ODOL on 2017. 7. 12..
 */
@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping
    public Collection<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{offset}/{limit}")
    public Collection<ProductDto> getProductsByOffset(
            @PathVariable("offset") Integer offset,
            @PathVariable("limit") Integer limit) {
        return productService.getProductsByOffset(offset, limit);
    }
}
