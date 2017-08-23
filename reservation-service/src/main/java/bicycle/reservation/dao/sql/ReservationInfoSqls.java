package bicycle.reservation.dao.sql;

public class ReservationInfoSqls {
    public static final String SELECT_RESERVATION_INFOS_BY_USER_ID =
            "SELECT id, product_id, user_id, general_ticket_count, youth_ticket_count, child_ticket_count, reservation_name, reservation_tel, " +
                    "reservation_email, reservation_date, reservation_type, create_date, modify_date " +
                    "FROM reservation.reservation_info " +
                    "WHERE user_id = :userId " +
                    "ORDER BY reservation_type asc, reservation_date desc";
    public static final String UPDATE_RESERVATION_INFO =
            "UPDATE reservation.reservation_info " +
                    "SET product_id = :productId, user_id = :userId, general_ticket_count = :generalTicketCount, " +
                    "youth_ticket_count = :youthTicketCount, child_ticket_count = :childTicketCount, " +
                    "reservation_name = :reservationName, reservation_tel = :reservationTel, " +
                    "reservation_email = :reservationEmail, reservation_date = :reservationDate, " +
                    "reservation_type = :reservationType, create_date = :createDate, modify_date = :modifyDate " +
                    "WHERE id = :id";
    public static final String SELECT_RESERVATION_INFO_BY_BOOKING_NUMBER =
            "SELECT id, product_id, user_id, general_ticket_count, youth_ticket_count, child_ticket_count, reservation_name, reservation_tel, " +
                    "reservation_email, reservation_date, reservation_type, create_date, modify_date " +
                    "FROM reservation.reservation_info " +
                    "WHERE id = :id ";
}
