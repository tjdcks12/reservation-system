package bicycle.reservation.dao.impl;

import bicycle.reservation.dao.ReservationInfoDao;
import bicycle.reservation.dao.sql.ReservationInfoSqls;
import bicycle.reservation.model.domain.ReservationInfo;
import org.springframework.dao.EmptyResultDataAccessException;
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
public class ReservationInfoDaoImpl implements ReservationInfoDao {
        private NamedParameterJdbcTemplate jdbc;
        private SimpleJdbcInsert insertAction;
        private RowMapper<ReservationInfo> rowMapper = BeanPropertyRowMapper.newInstance(ReservationInfo.class);

        public ReservationInfoDaoImpl(DataSource dataSource) {
            this.jdbc = new NamedParameterJdbcTemplate(dataSource);
            this.insertAction = new SimpleJdbcInsert(dataSource).withTableName("reservation_info").usingGeneratedKeyColumns("id");

        }

        public Integer insert(ReservationInfo reservationInfo) {
            SqlParameterSource params = new BeanPropertySqlParameterSource(reservationInfo);
            return insertAction.executeAndReturnKey(params).intValue();

        }

        public List<ReservationInfo> selectReservationInfosByUserId(Long userId) {
            Map<String, Object> params = new HashMap<>();
            params.put("userId", userId);
            return jdbc.query(ReservationInfoSqls.SELECT_RESERVATION_INFOS_BY_USER_ID, params, rowMapper);
        }

        public ReservationInfo selectReservationInfoByBookingNumber(Integer bookingNumber) {
            Map<String, Object> params = new HashMap<>();
            params.put("id", bookingNumber);
            ReservationInfo result;
            try {
                result = jdbc.queryForObject(ReservationInfoSqls.SELECT_RESERVATION_INFO_BY_BOOKING_NUMBER, params, rowMapper);
            } catch (EmptyResultDataAccessException e) {
                return null;
            }
            return result;
        }

        public Integer update(ReservationInfo reservationInfo) {
            SqlParameterSource params = new BeanPropertySqlParameterSource(reservationInfo);
            return jdbc.update(ReservationInfoSqls.UPDATE_RESERVATION_INFO, params);
        }
}
