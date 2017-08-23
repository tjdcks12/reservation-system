package bicycle.reservation.dao.impl;

import bicycle.reservation.dao.UserDao;
import bicycle.reservation.dao.sql.UserSqls;
import bicycle.reservation.model.domain.User;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Repository
public class UserDaoImpl implements UserDao {
    private NamedParameterJdbcTemplate jdbc;
    private SimpleJdbcInsert insertAction;
    private RowMapper<User> rowMapper = BeanPropertyRowMapper.newInstance(User.class);

    public UserDaoImpl(DataSource dataSource) {
        this.jdbc = new NamedParameterJdbcTemplate(dataSource);
        this.insertAction = new SimpleJdbcInsert(dataSource).withTableName("users").usingGeneratedKeyColumns("id");

    }

    public Integer insert(User user) {
        SqlParameterSource params = new BeanPropertySqlParameterSource(user);
        return insertAction.executeAndReturnKey(params).intValue();
    }

    public Collection<User> selectAll() {
        Map<String, Object> params = Collections.emptyMap();
        return jdbc.query(UserSqls.SELECT_ALL, params, rowMapper);
    }

    public User selectById(Long userId) {
        Map<String, Object> params = new HashMap<>();
        params.put("userId", userId);
        User result;
        try {
            result = jdbc.queryForObject(UserSqls.SELECT_BY_ID, params, rowMapper);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
        return result;
    }

    public User selectBySnsId(String userSnsId) {
        Map<String, Object> params = new HashMap<>();
        params.put("userSnsId", userSnsId);
        User result;
        try {
            result = jdbc.queryForObject(UserSqls.SELECT_BY_SNS_ID, params, rowMapper);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
        return result;
    }
}
