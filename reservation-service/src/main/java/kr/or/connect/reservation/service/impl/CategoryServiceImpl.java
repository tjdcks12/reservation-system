package kr.or.connect.reservation.service.impl;

import kr.or.connect.reservation.dao.CategoryDao;
import kr.or.connect.reservation.domain.Category;
import kr.or.connect.reservation.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by ODOL on 2017. 7. 7..
 */
@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    CategoryDao categoryDao;

    @Override
    @Transactional(readOnly = true)
    public List<Category> getCategories() {
        return categoryDao.selectAll();
    }

    @Override
    @Transactional
    public Category addCategory(Category category) {
        Long id = categoryDao.insert(category);
        category.setId(id);
        return category;
    }

    @Override
    @Transactional
    public int delete(Long id) {
        return categoryDao.delete(id);
    }

    @Override
    @Transactional
    public int update(Category category) {
        return categoryDao.update(category);
    }
}
