package kr.or.connect.reservation.service;

import kr.or.connect.reservation.domain.Product;
import kr.or.connect.reservation.dto.ProductDto;

import java.util.List;

/**
 * Created by ODOL on 2017. 7. 12..
 */
public interface ProductService {
    List<ProductDto> getProducts(Integer offset, Integer limit);
    List<ProductDto> getProductsByCategory(Integer category, Integer offset, Integer limit);
    Integer getProductsCount();
}
