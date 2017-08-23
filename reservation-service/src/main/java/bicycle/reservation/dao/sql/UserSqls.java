package bicycle.reservation.dao.sql;

public class UserSqls {
    public static final String SELECT_BY_ID =
            "SELECT id, username, email, tel, nickname, sns_id, sns_type, sns_profile, admin_flag, create_date, modify_date " +
                    "FROM reservation.users " +
                    "WHERE id = :userId";
    public static final String SELECT_ALL =
            "SELECT id, username, email, tel, nickname, sns_id, sns_type, sns_profile, admin_flag, create_date, modify_date " +
                    "FROM reservation.users";
    public static final String SELECT_BY_SNS_ID =
            "SELECT id, username, email, tel, nickname, sns_id, sns_type, sns_profile, admin_flag, create_date, modify_date " +
                    "FROM reservation.users " +
                    "WHERE sns_id = :userSnsId";
}
