package bicycle.reservation.service.impl;

import bicycle.reservation.dao.FileDao;
import bicycle.reservation.model.domain.File;
import bicycle.reservation.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;

import javax.servlet.http.HttpServletResponse;
import java.io.FileInputStream;

@Service
public class FileServiceImpl implements FileService {


    private FileDao fileDao;

    @Autowired
    public FileServiceImpl(FileDao fileDao) {
        this.fileDao = fileDao;
    }

    @Override
    public File getFileByFileId(Integer fileId) {
        return fileDao.selectFileByFileId(fileId);
    }
}
