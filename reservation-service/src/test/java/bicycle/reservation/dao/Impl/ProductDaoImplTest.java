package bicycle.reservation.dao.Impl;

import bicycle.common.exception.CustomException;
import bicycle.reservation.config.RootApplicationContextConfig;
import bicycle.reservation.dao.ProductDao;
import bicycle.reservation.model.dto.ProductDto;
import org.hamcrest.collection.IsEmptyCollection;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.hamcrest.core.IsNot.not;
import static org.junit.Assert.*;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {RootApplicationContextConfig.class})
public class ProductDaoImplTest {

    @Autowired
    ProductDao productDao;

    @Test(expected = CustomException.class)
    public void testMinusPage() throws DataAccessException {
        Integer page = -1;
        productDao.selectProducDtoInPage(page,10);
    }

    @Test
    public void testMoreThanMaxPage() throws DataAccessException {
        Integer page = Integer.MAX_VALUE;
        assertThat(productDao.selectProducDtoInPage(page,10), IsEmptyCollection.empty());
    }

    @Test
    public void testNormalCase() throws DataAccessException {
        List<ProductDto> productDtoList = productDao.selectProducDtoInPage(0, 4);
        assertThat(productDtoList, not(IsEmptyCollection.empty()));
        assertThat(productDtoList, hasSize(4));
    }

}