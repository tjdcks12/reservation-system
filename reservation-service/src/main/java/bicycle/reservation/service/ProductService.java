package bicycle.reservation.service;

import bicycle.reservation.model.dto.ProductDetailDto;
import bicycle.reservation.model.dto.ProductDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ProductService {
    public List<ProductDto> getProduct(Integer page, Integer categoryId);

    public ProductDetailDto getProductDetailByProductId(Integer productId);

    public Integer getProductsCountByCategoryId(Integer categoryId);


}
