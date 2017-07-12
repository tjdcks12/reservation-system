package kr.or.connect.reservation.service;

import kr.or.connect.reservation.domain.Product;

import java.util.List;

/**
 * Created by ODOL on 2017. 7. 12..
 */
public interface ProductService {
    List<Product> getAllProducts();
    List<Product> getProductsByCategoryId(Long categoryId);
}
