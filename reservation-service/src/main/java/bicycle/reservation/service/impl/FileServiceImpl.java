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
    public HttpServletResponse getFileByFileId(Integer fileId, HttpServletResponse response) {
        File file = fileDao.selectFileByFileId(fileId);
        // id를 이용하여 파일의 정보를 읽어온다.
        // 이 부분은 원래 db에서 읽어오는 것인데 db부분은 생략했다.

        String originalFilename = file.getFileName();
        String contentType = file.getContentType();
        Long fileSize = file.getFileLength();
        // 해당 파일이 이미 존재해야한다.
        String saveFileName = file.getSaveFileName();

        response.setHeader("Content-Disposition", "attachment; filename=\"" + originalFilename + "\";");
        response.setHeader("Content-Transfer-Encoding", "binary");
        response.setHeader("Content-Type", contentType);
        response.setHeader("Content-Length", "" + fileSize);
        response.setHeader("Pragma", "no-cache;");
        response.setHeader("Expires", "-1;");

        java.io.File readFile = new java.io.File(saveFileName);
        if (!readFile.exists()) { // 파일이 존재하지 않다면
            throw new RuntimeException("file not found");
        }

        FileInputStream fis = null;
        try {
            fis = new FileInputStream(readFile);
            FileCopyUtils.copy(fis, response.getOutputStream()); // 파일을 저장할때도
            // 사용할 수 있다.
            response.getOutputStream().flush();
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        } finally {
            try {
                fis.close();
            } catch (Exception ex) {
                // 아무것도 하지 않음 (필요한 로그를 남기는 정도의 작업만 함.)
            }
        }
        return response;
    }
}
