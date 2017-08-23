package bicycle.reservation.dao;

import bicycle.reservation.model.domain.ReservationUserComment;
import bicycle.reservation.model.dto.CommentDto;

import java.util.List;

public interface CommentDao {
    Integer insert(ReservationUserComment reservationUserComment);

    List<CommentDto> selectCommentDtoByProductIdInPage(Integer productId, Integer count, Integer page);

    Double selectAverageScoreByProductId(Integer productId);

    Integer selectCountByProId(Integer productId);

}
