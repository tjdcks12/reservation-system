package bicycle.reservation.service.impl;

import bicycle.reservation.dao.CommentDao;
import bicycle.reservation.dao.FileDao;
import bicycle.reservation.dao.ReservationUserCommentImageDao;
import bicycle.reservation.model.domain.File;
import bicycle.reservation.model.domain.ReservationUserComment;
import bicycle.reservation.model.domain.ReservationUserCommentImage;
import bicycle.reservation.model.dto.CommentRegisterFormDto;
import bicycle.reservation.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;

import javax.servlet.http.HttpServletResponse;
import javax.xml.stream.events.Comment;
import java.io.FileInputStream;
import java.util.Collection;
import java.util.Date;

@Service
public class FileServiceImpl implements FileService {


    private FileDao fileDao;
    private CommentDao commentDao;
    private ReservationUserCommentImageDao commentImageDao;

    @Autowired
    public FileServiceImpl(FileDao fileDao, CommentDao commentDao, ReservationUserCommentImageDao commentImageDao) {
        this.fileDao = fileDao;
        this.commentDao = commentDao;
    }

    @Override
    public File getFileByFileId(Integer fileId) {
        return fileDao.selectFileByFileId(fileId);
    }

    @Override
    public Integer addComment(CommentRegisterFormDto commentRegisterFormDto, Collection<File> images) {
        ReservationUserComment comment = new ReservationUserComment();
        comment.setComment(commentRegisterFormDto.getComment());
        comment.setCreateDate(new Date());
        comment.setProductId(commentRegisterFormDto.getProductId());
        comment.setScore(commentRegisterFormDto.getScore());
        comment.setUserId(commentRegisterFormDto.getUserId());
        Integer commentId = commentDao.insert(comment);
        for(File image : images) {
            File savingImage = new File();
            savingImage.setContentType(image.getContentType());
            savingImage.setCreateDate(new Date());
            savingImage.setFileLength(image.getFileLength());
            savingImage.setFileName(image.getFileName());
            savingImage.setSaveFileName(image.getSaveFileName());
            savingImage.setUserId(image.getUserId());
            Integer fileId = fileDao.insert(savingImage);
            ReservationUserCommentImage commentImage = new ReservationUserCommentImage();
            commentImage.setFileId(fileId);
            commentImage.setReservationUserCommentId(commentId);
            commentImageDao.insert(commentImage);
        }
        return commentId;
    }
}
