package bicycle.reservation.dao.Impl;

import bicycle.common.exception.CustomException;
import bicycle.reservation.config.RootApplicationContextConfig;
import bicycle.reservation.dao.CategoryDao;
import bicycle.reservation.model.domain.Category;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.junit.Assert.assertThat;

@Transactional
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {RootApplicationContextConfig.class})
public class CategoryDaoImplTest  {
    @Autowired
    CategoryDao categoryDao;

    @Test
    public void testInsert() throws Exception{
        Category category = new Category();
        category.setName("테스트");
        Integer categoryId = categoryDao.insertCategory(category);
        System.out.println(categoryId);
        categoryDao.selectCategoryByCategoryId(categoryId);
        assertThat(category.getName(), is(notNullValue()));
    }



}
