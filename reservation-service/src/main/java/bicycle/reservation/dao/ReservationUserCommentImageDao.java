package bicycle.reservation.dao;

import bicycle.reservation.model.domain.ReservationUserCommentImage;

import java.util.Collection;

public interface ReservationUserCommentImageDao {
    public Integer insert(ReservationUserCommentImage reservationUserCommentImage);
    public Collection<ReservationUserCommentImage> getByComId(Integer commentId);
}
