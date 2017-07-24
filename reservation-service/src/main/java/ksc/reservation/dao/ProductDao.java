package ksc.reservation.dao;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import ksc.reservation.dto.ProductDto;

@Repository
public class ProductDao {
	private NamedParameterJdbcTemplate jdbc;
	private RowMapper<ProductDto> rowMapper = BeanPropertyRowMapper.newInstance(ProductDto.class);
	
	public ProductDao(DataSource dataSource) {
		this.jdbc = new NamedParameterJdbcTemplate(dataSource);
	}
	
	
	public Collection<ProductDto> selectProduct(int start, int term) {
		Map<String, Object> params = new HashMap<>();
		params.put("start", start);
		params.put("term", term);
		return jdbc.query(ProductSqls.SELECT_PRODUCT, params, rowMapper);
	}
	
	public Collection<ProductDto> selectProductByCategory(int categoryId, int start, int term){
		Map<String, Object> params = new HashMap<>();
		params.put("categoryId", categoryId);
		params.put("start", start);
		params.put("term", term);
		return jdbc.query(ProductSqls.SELECT_PRODUCT_BY_CATE, params, rowMapper);
	}
	
	public Integer getCount() {
		Map<String, Object> params = Collections.emptyMap();
		return jdbc.queryForObject(ProductSqls.SELECT_PRODUCT_COUNT, params, Integer.class);
	}
	
	public Integer getCountByCate(int categoryId) {
		Map<String, Object> params = new HashMap<>();
		params.put("id", categoryId);
		return jdbc.queryForObject(ProductSqls.SELECT_PRODUCT_COUNT_BY_CATE, params, Integer.class);
	}
	
}
