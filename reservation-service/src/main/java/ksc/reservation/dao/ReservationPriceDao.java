package ksc.reservation.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import ksc.reservation.dto.ReservationPriceDto;

@Repository
public class ReservationPriceDao {
	private NamedParameterJdbcTemplate jdbc;
	private RowMapper<ReservationPriceDto> rowMapper = BeanPropertyRowMapper.newInstance(ReservationPriceDto.class);
	public ReservationPriceDao(DataSource dataSource) {
		this.jdbc = new NamedParameterJdbcTemplate(dataSource);
	}
	
	public List<ReservationPriceDto> selectPrice(int productId){
		Map<String, Object> params = new HashMap<>();
		params.put("productId", productId);
		return jdbc.query(ReservationPriceSqls.SELECT_PRICE_BY_PRODUCT_ID, params, rowMapper);
	}
}
