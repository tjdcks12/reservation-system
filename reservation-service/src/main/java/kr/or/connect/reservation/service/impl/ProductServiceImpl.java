package kr.or.connect.reservation.service.impl;

import kr.or.connect.reservation.dao.ProductDao;
import kr.or.connect.reservation.domain.Product;
import kr.or.connect.reservation.dto.ProductDto;
import kr.or.connect.reservation.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by ODOL on 2017. 7. 12..
 */
@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductDao productDao;
    @Override
    @Transactional(readOnly = true)
    public List<Product> getAllProducts() {
        return productDao.selectAll();
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProductDto> getProductsByCategoryId(Long categoryId, Integer offset, Integer limit) {
        return productDao.selectByCategoryId(categoryId, offset, limit);
    }
}
