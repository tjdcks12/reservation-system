package kr.or.connect.reservation.dao;
import static kr.or.connect.reservation.dao.CategorySqls.*;
import kr.or.connect.reservation.domain.Category;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by ODOL on 2017. 7. 7..
 */
@Repository
public class CategoryDao {
    private NamedParameterJdbcTemplate jdbcTemplate;
    private SimpleJdbcInsert simpleJdbcInsert;
    private RowMapper<Category> rowMapper = BeanPropertyRowMapper.newInstance(Category.class);

    public CategoryDao(DataSource dataSource) {
        this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
        this.simpleJdbcInsert = new SimpleJdbcInsert(dataSource)
                .withTableName("Category")
                .usingGeneratedKeyColumns("id");
    }

    public Long insert(Category category) {
        SqlParameterSource parameterSource = new BeanPropertySqlParameterSource(category);
        return simpleJdbcInsert.executeAndReturnKey(parameterSource).longValue();
    }

    public List<Category> selectAll() {
        Map<String, Object> paramsMap = Collections.emptyMap();
        return jdbcTemplate.query(SELECT_ALL, paramsMap, rowMapper);
    }

    public int delete(Long id) {
        Map<String, ?> params = Collections.singletonMap("id", id);
        return jdbcTemplate.update(DELECT_BY_ID, params);
    }

    public int update(Category category) {
        SqlParameterSource parameterSource = new BeanPropertySqlParameterSource(category);
        return jdbcTemplate.update(UPDATE_BY_ID, parameterSource);
    }
}
