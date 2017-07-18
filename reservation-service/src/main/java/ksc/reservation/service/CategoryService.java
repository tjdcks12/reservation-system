package ksc.reservation.service;

import java.util.Collection;

import ksc.reservation.domain.Category;

public interface CategoryService {
	public Category addCate(Category category);
	public int delete(int id);
	public int update(Category category);
	public Collection<Category> get();
	public Collection<Category> get_by_id(int id);
}
