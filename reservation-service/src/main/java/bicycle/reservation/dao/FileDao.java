package bicycle.reservation.dao;

import bicycle.reservation.model.domain.File;

import java.util.List;

public interface FileDao {
    public File selectFileByFileId(Integer fileId);
    List<File> selectFilesByProductId(Integer productId);
}
