package ksc.reservation.service.impl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ksc.reservation.dao.ProductDao;
import ksc.reservation.dto.ProductDto;
import ksc.reservation.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductDao productDao;
	
	@Override
	@Transactional(readOnly = true)
	public Collection<ProductDto> get(int start){ 
		int term = 10;
		return productDao.selectProduct(start, term);
	}
	
	@Override
	@Transactional(readOnly = true)
	public Collection<ProductDto> getByCategory(int start, int category){
		int term = 10;
		return productDao.selectProductByCategory(category, start, term);
	}
	
	@Override
	@Transactional(readOnly = true)
	public Integer getCount() {
		return productDao.getCount();
	}
	
	@Override
	@Transactional(readOnly = true)
	public Integer getCountByCategory(int categoryId) {
		return productDao.getCountByCate(categoryId);
	}
	
}
