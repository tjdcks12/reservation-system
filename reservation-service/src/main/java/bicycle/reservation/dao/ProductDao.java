package bicycle.reservation.dao;

import bicycle.reservation.model.dto.ProductDto;

import java.util.List;

public interface ProductDao {
    List<ProductDto> selectProducDtoInPage(Integer page, Integer count);
}
