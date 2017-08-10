package bicycle.reservation.service;

import bicycle.reservation.model.domain.File;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletResponse;

public interface FileService {
    @Transactional(readOnly = true)
    HttpServletResponse getFileByFileId(Integer fileId, HttpServletResponse response);



}
