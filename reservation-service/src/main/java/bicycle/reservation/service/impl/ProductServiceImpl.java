package bicycle.reservation.service.impl;

import bicycle.reservation.dao.Impl.ProductDaoImpl;
import bicycle.reservation.dao.ProductDao;
import bicycle.reservation.model.dto.ProductDetailDto;
import bicycle.reservation.model.dto.ProductDto;
import bicycle.reservation.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductDao productDao;

    @Override
    public List<ProductDto> getProduct(Integer page, Integer count) {
        return productDao.selectProducDtoInPage(page, count);
    }

    @Override
    public ProductDetailDto getProductDetailByProductId(Integer productId) {
        return productDao.selectProductDetailDtoByProductId(productId);
    }
}