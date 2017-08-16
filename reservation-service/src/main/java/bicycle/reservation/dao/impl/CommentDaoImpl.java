package bicycle.reservation.dao.impl;

import bicycle.common.exception.CustomException;
import bicycle.reservation.dao.CommentDao;
import bicycle.reservation.dao.sql.CommentSqls;
import bicycle.reservation.model.dto.CommentDto;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class CommentDaoImpl implements CommentDao {
    private NamedParameterJdbcTemplate jdbc;
    private RowMapper<CommentDto> commentDtoRowMapper = BeanPropertyRowMapper.newInstance(CommentDto.class);

    CommentDaoImpl(DataSource dataSource){
        this.jdbc = new NamedParameterJdbcTemplate(dataSource);
    }

    @Override
    public List<CommentDto> selectCommentDtoByProductIdInPage(Integer productId, Integer count, Integer page) {
        Map<String, Object> params = new HashMap<>();
        params.put("productId", productId);
        params.put("count", count);
        params.put("page",page);
        List<CommentDto> recentCommentDtos = null;
        try{
            recentCommentDtos = jdbc.query(CommentSqls.SELECT_RECENT_COMMENTS_BY_PRODUCT_ID, params, commentDtoRowMapper);
        }catch (DataAccessException e){
            throw new CustomException("error", e.getMessage());
        }
        return recentCommentDtos;
    }
}
