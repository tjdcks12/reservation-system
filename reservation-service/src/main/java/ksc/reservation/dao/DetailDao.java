package ksc.reservation.dao;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import ksc.reservation.dto.DetailDto;

@Repository
public class DetailDao {
	private NamedParameterJdbcTemplate jdbc;
	private RowMapper<DetailDto> rowMapper = BeanPropertyRowMapper.newInstance(DetailDto.class);

}
