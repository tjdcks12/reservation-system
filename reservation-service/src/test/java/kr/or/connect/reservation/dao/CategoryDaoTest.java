package kr.or.connect.reservation.dao;

import static org.junit.Assert.*;
import kr.or.connect.reservation.config.RootApplicationContextConfig;
import kr.or.connect.reservation.domain.Category;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by ODOL on 2017. 7. 7..
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = RootApplicationContextConfig.class)
@Transactional
public class CategoryDaoTest {
    @Autowired
    CategoryDao categoryDao;

    @Test
    public void shouldCategoryInsert() {
        Category category = new Category();
        category.setName("name");
        Long id = categoryDao.insert(category);
        assertNotNull(id);
    }

    @Test
    public void shouldCategorySelect() {
        List<Category> categoryList = categoryDao.selectAll();
        assertNotNull(categoryList);
    }

    @Test
    public void shouldCategoryDelete() {
        Category category = new Category();
        category.setName("test");
        Long id = categoryDao.insert(category);
        assertNotNull(categoryDao.delete(id));
    }

}
