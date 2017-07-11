package ksc.reservation.service.impl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ksc.reservation.dao.CategoryDao;
import ksc.reservation.domain.Category;
import ksc.reservation.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService{
	@Autowired
	CategoryDao categoryDao;
	
	@Override
	@Transactional(readOnly = true)
	public Collection<Category> get() {
		return categoryDao.select();
	}
	
	@Override
	public int delete(int id) {
		return categoryDao.delete(id);
	}
	
	@Override
	@Transactional(readOnly = false)
	public Category addCate(Category category) {
		int insert = categoryDao.insert(category);
		category.setId(insert);
		return category;
	}
	
	@Override
	public int update(Category category) {
		return categoryDao.update(category);
	}
	
}
