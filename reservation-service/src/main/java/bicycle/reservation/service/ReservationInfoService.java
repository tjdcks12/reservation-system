package bicycle.reservation.service;

import bicycle.reservation.model.domain.ReservationInfo;
import bicycle.reservation.model.dto.BookedListDto;

import java.util.List;

public interface ReservationInfoService {

    public Integer addReservationInfo(ReservationInfo reservationInfo);

    public List<ReservationInfo> getReservationInfosByUserId(Long userId);

    public List<BookedListDto> getBookedListsByUserId(Long userId);

    public BookedListDto getBookedListByBookingNumber(Integer bookingNumber);

    public Integer updateReservationTypeToCancelledByBookingNumber(Integer bookingNumber);
}
