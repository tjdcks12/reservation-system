package bicycle.reservation.dao;

import bicycle.reservation.model.dto.ProductDetailDto;
import bicycle.reservation.model.dto.ProductDto;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface ProductDao {
    List<ProductDto> selectProducDtoInPage(Integer page, Integer count);

    List<ProductDto> selectProducDtoInPageByCategoryId(Integer page, Integer count, Integer categoryId);

    ProductDetailDto selectProductDetailDtoByProductId(Integer productId);

    Integer selectAllProductsCount();

    Integer selectProductsCountByCategoryId(Integer categoryId);
}
