package bicycle.reservation.dao;

import bicycle.reservation.model.domain.File;

public interface FileDao {
    public File selectFileByFileId(Integer fileId);
}
