package ksc.reservation.service.impl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ksc.reservatino.dto.ProductDto;
import ksc.reservation.dao.ProductDao;
import ksc.reservation.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductDao productDao;
	
	@Override
	@Transactional(readOnly = true)
	public Collection<ProductDto> get(int start){ 
		int term = 10;
		return productDao.select_product(start, term);
	}
	
	@Override
	@Transactional(readOnly = true)
	public Collection<ProductDto> getByCategory(int start, int category){
		int term = 10;
		return productDao.select_product_by_category(category, start, term);
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
