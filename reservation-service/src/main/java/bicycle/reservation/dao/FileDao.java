package bicycle.reservation.dao;

import bicycle.reservation.model.domain.File;

import java.util.List;

public interface FileDao {
    File selectFileByFileId(Integer fileId);
    List<Integer> selectFilesByProductId(Integer productId);
    Integer insert(File file);
}
