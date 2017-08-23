package bicycle.reservation.dao;

import bicycle.reservation.model.domain.ReservationInfo;

import java.util.List;

public interface ReservationInfoDao {
    Integer insert(ReservationInfo reservationInfo);
    List<ReservationInfo> selectReservationInfosByUserId(Long userId);
    ReservationInfo selectReservationInfoByBookingNumber(Integer bookingNumber);
    Integer update(ReservationInfo reservationInfo);
}
