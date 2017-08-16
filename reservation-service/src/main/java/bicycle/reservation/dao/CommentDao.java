package bicycle.reservation.dao;

import bicycle.reservation.model.dto.CommentDto;

import java.util.List;

public interface CommentDao {
    List<CommentDto> selectRecentCommentDto(Integer productId);
}
