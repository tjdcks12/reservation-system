package bicycle.reservation.service.impl;

import bicycle.reservation.dao.CommentDao;
import bicycle.reservation.model.dto.CommentDto;
import bicycle.reservation.service.CommnetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommnetServiceImpl implements CommnetService {
    private CommentDao commentDao;

    @Autowired
    public CommnetServiceImpl(CommentDao commentDao){
        this.commentDao = commentDao;
    }

    @Override
    public List<CommentDto> getRecentCommnetDto(Integer productId) {
        List<CommentDto> commentDtoList = commentDao.selectRecentCommentDto(productId);
        for(CommentDto c: commentDtoList) {
            c.setScore(c.getScore()*5);
        }
        return commentDtoList;
    }
}
