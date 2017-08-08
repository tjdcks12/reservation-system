package bicycle.reservation.service.impl;

import bicycle.reservation.dao.CategoryDao;
import bicycle.reservation.model.domain.Category;
import bicycle.reservation.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    CategoryDao categoryDao;

    @Override
    public List<Category> getCategory() {
        return categoryDao.selectAllCategories();
    }

    @Override
    public Category insertCategory(Category category) {
        Integer insertNum = categoryDao.insertCategory(category);
        category.setId(insertNum);
        return category;
    }

}
