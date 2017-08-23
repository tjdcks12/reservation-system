package bicycle.reservation.service;

import bicycle.reservation.model.domain.File;
import bicycle.reservation.model.dto.CommentRegisterFormDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletResponse;
import java.util.Collection;

public interface FileService {
    @Transactional(readOnly = true)
    File getFileByFileId(Integer fileId);
    @Transactional(readOnly = false)
    public Integer addComment(CommentRegisterFormDto commentRegisterFormDto, Collection<File> images);


}
