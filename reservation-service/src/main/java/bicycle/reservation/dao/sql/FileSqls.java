package bicycle.reservation.dao.sql;

public class FileSqls {
    public static final String SELECT_FILE_BY_FILE_ID = "" +
            "SELECT user_id, save_file_name, modify_date, id, file_name, file_length, delete_flag, create_date, content_type " +
            "FROM reservation.file " +
            "WHERE id=:fileId";
    public static final String SELECT_FILES_BY_PRODUCT_ID = "" +
            "SELECT f.id " +
            "FROM file f, product_image pi " +
            "WHERE pi.file_id = f.id AND pi.product_id =:productId;";


}
