package ksc.reservation.service;

import java.util.Collection;

import ksc.reservatino.dto.ProductDto;

public interface ProductService {
	public Collection<ProductDto> get(int limit);
	public Collection<ProductDto> getByCategory(int limit, int category);
	public Integer getCount();
	public Integer getCountByCategory(int categoryId);
}
