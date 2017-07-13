package kr.or.connect.reservation.dao;

import kr.or.connect.reservation.domain.Product;
import kr.or.connect.reservation.dto.ProductDto;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static kr.or.connect.reservation.dao.sql.ProductSqls.*;
/**
 * Created by ODOL on 2017. 7. 12..
 */
@Repository
public class ProductDao {
    private NamedParameterJdbcTemplate jdbcTemplate;
    private SimpleJdbcInsert simpleJdbcInsert;
    private RowMapper<Product> rowMapper = BeanPropertyRowMapper.newInstance(Product.class);
    private RowMapper<ProductDto> dtoRowMapper = BeanPropertyRowMapper.newInstance(ProductDto.class);

    public ProductDao(DataSource dataSource) {
        this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public List<Product> selectAll() {
        return jdbcTemplate.query(SELECT_ALL, rowMapper);
    }

    public List<ProductDto> selectByOffset(Integer offset, Integer limit) {
        Map<String, Object> paramsMap = new HashMap<>();
        paramsMap.put("offset", offset);
        paramsMap.put("limit", limit);

        return jdbcTemplate.query(SELECT_BY_CATEGORY_ID, paramsMap, dtoRowMapper);
    }
}
