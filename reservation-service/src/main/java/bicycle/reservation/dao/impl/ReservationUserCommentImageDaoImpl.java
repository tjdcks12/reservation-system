package bicycle.reservation.dao.impl;

import bicycle.reservation.dao.ReservationUserCommentImageDao;
import bicycle.reservation.dao.sql.ReservationUserCommentImageSqls;
import bicycle.reservation.model.domain.ReservationUserCommentImage;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
public class ReservationUserCommentImageDaoImpl implements ReservationUserCommentImageDao {
    private NamedParameterJdbcTemplate jdbc;
    private SimpleJdbcInsert insertAction;
    private RowMapper<ReservationUserCommentImage> rowMapper = BeanPropertyRowMapper.newInstance(ReservationUserCommentImage.class);


    public ReservationUserCommentImageDaoImpl(DataSource dataSource) {
        this.jdbc = new NamedParameterJdbcTemplate(dataSource);
        this.insertAction = new SimpleJdbcInsert(dataSource).withTableName("reservation_user_comment_image").usingGeneratedKeyColumns("id");
    }

    @Override
    public Integer insert(ReservationUserCommentImage reservationUserCommentImage) {
        SqlParameterSource params = new BeanPropertySqlParameterSource(reservationUserCommentImage);
        return insertAction.executeAndReturnKey(params).intValue();
    }

    @Override
    public Collection<ReservationUserCommentImage> getByComId(Integer commentId) {
        Map<String, Object> params = new HashMap<>();
        params.put("commentId", commentId);
        return jdbc.query(ReservationUserCommentImageSqls.SELECT_BY_COMMENT_ID, params, rowMapper);
    }
}