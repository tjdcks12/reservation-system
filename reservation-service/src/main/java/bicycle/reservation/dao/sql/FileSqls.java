package bicycle.reservation.dao.sql;

public class FileSqls {
    public static final String SELECT_FILE_BY_FILE_ID = "" +
            "SELECT user_id, save_file_name, modify_date, id, file_name, file_length, delete_flag, create_date, content_type\n" +
            "FROM reservation.file\n" +
            "WHERE id=:fileId";
}
