package ksc.reservation.dao;

import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import ksc.reservation.domain.Users;

@Repository
public class NaverLoginDao {
	private NamedParameterJdbcTemplate jdbc;
	private SimpleJdbcInsert insertAction;

	public NaverLoginDao(DataSource dataSource) {
		this.jdbc = new NamedParameterJdbcTemplate(dataSource);
		this.insertAction = new SimpleJdbcInsert(dataSource).withTableName("users").usingGeneratedKeyColumns("id");
	}

	public int insert(Users user) {
		SqlParameterSource params = new BeanPropertySqlParameterSource(user);
		return insertAction.executeAndReturnKey(params).intValue();
	}

	public boolean duplicateCheck(int snsId) {
		try {

			Map<String, Integer> params = new HashMap<>();
			params.put("snsId", snsId);
			Integer cnt = jdbc.queryForObject(NaverLoginSqls.DUPLICATE_CHECK, params, Integer.class);
			return cnt != null && cnt > 0;
		} catch (EmptyResultDataAccessException e) {
			return false;
		}
	}
	
	public int getUserId(int snsId) {
		Map<String, Integer> params = new HashMap<>();
		params.put("snsId", snsId);
		return jdbc.queryForObject(NaverLoginSqls.SELECT_USER_ID_BY_SNSID, params, Integer.class);
	}
}
