package bicycle.reservation.dao.Impl;

import bicycle.common.exception.CustomException;
import bicycle.reservation.dao.ProductDao;
import bicycle.reservation.dao.sql.ProductSqls;
import bicycle.reservation.model.dto.ProductDto;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ProductDaoImpl implements ProductDao {
    private NamedParameterJdbcTemplate jdbc;
    private SimpleJdbcInsert insertAction;
    private RowMapper<ProductDto> productDtoRowMapper = BeanPropertyRowMapper.newInstance(ProductDto.class);

    public ProductDaoImpl(DataSource dataSource) {
        this.jdbc = new NamedParameterJdbcTemplate(dataSource);
        this.insertAction = new SimpleJdbcInsert(dataSource).withTableName("product").usingGeneratedKeyColumns("id");
    }

    public List<ProductDto> selectProducDtoInPage(Integer page, Integer count) {
        Map<String, Object> params = new HashMap<>();
        params.put("page", page);
        params.put("count", count);
        List<ProductDto> products = null;
        try {
            products = jdbc.query(ProductSqls.SELECT_PRODUCTDTO_IN_PAGE, params, productDtoRowMapper);
        } catch (DataAccessException e) {
            //에러 처리
            throw new CustomException();
        }
        return products;
    }

}