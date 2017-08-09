package bicycle.reservation.service.impl;

import bicycle.reservation.dao.Impl.ProductDaoImpl;
import bicycle.reservation.dao.ProductDao;
import bicycle.reservation.model.dto.ProductDetailDto;
import bicycle.reservation.model.dto.ProductDto;
import bicycle.reservation.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service

public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductDao productDao;

    @Value("${app.page.count}")
    private Integer count;

    @Override
    @Transactional(readOnly = true)
    public List<ProductDto> getProduct(Integer page, Integer categoryId) {
        if (categoryId == 1) {
            return productDao.selectProducDtoInPage(page, count);
        }
        return productDao.selectProducDtoInPageByCategoryId(page, count, categoryId);
    }

    @Override
    @Transactional(readOnly = true)
    public ProductDetailDto getProductDetailByProductId(Integer productId) {
        return productDao.selectProductDetailDtoByProductId(productId);
    }
}