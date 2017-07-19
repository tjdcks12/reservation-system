package ksc.reservation.service;

import java.util.Collection;

import ksc.reservation.dto.ProductDto;

public interface ProductService {
	public Collection<ProductDto> get(int limit);
	public Collection<ProductDto> getByCategory(int limit, int category);
	public Integer getCount();
	public Integer getCountByCategory(int categoryId);
	
}
