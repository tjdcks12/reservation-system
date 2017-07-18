package kr.or.connect.reservation.service;

import kr.or.connect.reservation.domain.dto.ProductDto;

import java.util.List;

/**
 * Created by ODOL on 2017. 7. 12..
 */
public interface ProductService {
    List<ProductDto> getProductsUseLimit(Integer offset, Integer limit);
    List<ProductDto> getProductsByCategoryId(Integer category, Integer offset, Integer limit);
    Integer getProductsCount();
}
