package ksc.reservation.dao;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import ksc.reservation.domain.Category;

@Repository
public class CategoryDao {
	private NamedParameterJdbcTemplate jdbc;
	private SimpleJdbcInsert insertAction;
	private RowMapper<Category> rowMapper = BeanPropertyRowMapper.newInstance(Category.class);
	
	public CategoryDao(DataSource dataSource) {
		this.jdbc = new NamedParameterJdbcTemplate(dataSource);
		this.insertAction = new SimpleJdbcInsert(dataSource)
				.withTableName("category")
				.usingGeneratedKeyColumns("id");
	}
	
	public int insert(Category category) {
		SqlParameterSource params = new BeanPropertySqlParameterSource(category);
		return insertAction.executeAndReturnKey(params).intValue();
	}
	
	public Collection<Category> select() {
		Map<String, Object> params = new HashMap<>();
		return jdbc.query(CategorySqls.SELECT, params, rowMapper);
		
	}
	
	public int delete(int id) {
		Map<String, Integer> params = Collections.singletonMap("id", id);
		return jdbc.update(CategorySqls.DELETE_BY_ID, params);
	}
	
	public int update(Category category) {
		SqlParameterSource params = new BeanPropertySqlParameterSource(category);
		return jdbc.update(CategorySqls.UPDATE_BY_ID, params);
	}
	
	public Collection<Category> select_by_id(int id){
		Map<String, Integer> params = Collections.singletonMap("id", id);
		return jdbc.query(CategorySqls.SELECT_BY_ID, params, rowMapper);
	}
	
	
}
