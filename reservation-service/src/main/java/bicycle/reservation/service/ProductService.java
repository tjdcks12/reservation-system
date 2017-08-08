package bicycle.reservation.service;

import bicycle.reservation.model.dto.ProductDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ProductService {
    @Transactional(readOnly = true)
    public List<ProductDto> getProduct(Integer page, Integer count);
}
