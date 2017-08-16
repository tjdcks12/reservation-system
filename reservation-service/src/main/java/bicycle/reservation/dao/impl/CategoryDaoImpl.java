package bicycle.reservation.dao.impl;

import bicycle.common.exception.CustomException;
import bicycle.reservation.dao.CategoryDao;
import bicycle.reservation.dao.sql.CategorySqls;
import bicycle.reservation.model.domain.Category;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class CategoryDaoImpl implements CategoryDao{
    private NamedParameterJdbcTemplate jdbc;
    private SimpleJdbcInsert insertAction;
    private RowMapper<Category> categoryRowMapper = BeanPropertyRowMapper.newInstance(Category.class);

    public CategoryDaoImpl(DataSource dataSource) {
        this.jdbc = new NamedParameterJdbcTemplate(dataSource);
        this.insertAction = new SimpleJdbcInsert(dataSource).withTableName("category").usingGeneratedKeyColumns("id");
    }

    @Override
    public List<Category> selectAllCategories() {
        Map<String, Object> params = new HashMap<>();
        List<Category> categories = null;
        try {
            categories = jdbc.query(CategorySqls.SELECT_CATEGORY, params, categoryRowMapper);
        }catch (DataAccessException e){
            throw new CustomException("error", e.getMessage());
        }
        return categories;
    }

    @Override
    public Category selectCategoryByCategoryId(int categoryId) {
        Category category = null;

        Map<String, Object> params = new HashMap<>();
        params.put("id", categoryId);
        try{
            category = jdbc.queryForObject(CategorySqls.SELECT_CATEGORY_BY_CATEGORY_ID, params, categoryRowMapper);
        }catch (DataAccessException e){
            throw new CustomException("error", e.getMessage());
        }
        return category;
    }


    @Override
    public Integer insertCategory(Category category) {
        SqlParameterSource params = new BeanPropertySqlParameterSource(category);
        Integer insertResult;
        try {
             insertResult = insertAction.executeAndReturnKey(params).intValue();
        }catch (Exception e){
            throw new CustomException("error", e.getMessage());
        }
        return insertResult;
    }
}
