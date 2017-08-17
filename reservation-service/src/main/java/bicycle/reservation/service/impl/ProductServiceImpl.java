package bicycle.reservation.service.impl;

import bicycle.reservation.dao.FileDao;
import bicycle.reservation.dao.ProductDao;
import bicycle.reservation.model.domain.File;
import bicycle.reservation.model.domain.ProductPrice;
import bicycle.reservation.model.dto.ProductDetailDto;
import bicycle.reservation.model.dto.ProductDto;
import bicycle.reservation.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service

public class ProductServiceImpl implements ProductService {

    private ProductDao productDao;
    private FileDao fileDao;

    @Value("${app.page.count}")
    private Integer count;

    @Autowired
    public ProductServiceImpl(ProductDao productDao, FileDao fileDao){
        this.productDao = productDao;
        this.fileDao = fileDao;
    }


    @Override
    @Transactional(readOnly = true)
    public List<ProductDto> getProducts(Integer page, Integer categoryId) {
        page *= count;
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

    @Override
    @Transactional(readOnly = true)
    public Integer getProductsCountByCategoryId(Integer categoryId) {
        if(categoryId == 1){
            return productDao.selectAllProductsCount();
        }
        return productDao.selectProductsCountByCategoryId(categoryId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Integer> getFilesByProductId(Integer productId) {
        return fileDao.selectFilesByProductId(productId);
    }

    @Override
    public List<ProductPrice> getProductPricesByProductId(Integer productId) {
        return productDao.selectProductPricesByProductId(productId);
    }


}