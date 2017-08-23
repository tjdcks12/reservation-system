package bicycle.reservation.service.impl;

import bicycle.reservation.dao.CommentDao;
import bicycle.reservation.model.domain.File;
import bicycle.reservation.model.dto.CommentDto;
import bicycle.reservation.model.dto.CommentRegisterFormDto;
import bicycle.reservation.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {
    private CommentDao commentDao;

    @Autowired
    public CommentServiceImpl(CommentDao commentDao){
        this.commentDao = commentDao;
    }

    @Override
    public List<CommentDto> getRecentCommnetDto(Integer productId) {
        List<CommentDto> commentDtoList = commentDao.selectCommentDtoByProductIdInPage(productId, 3 ,0);
        for(CommentDto c: commentDtoList) {
            c.setScore(c.getScore()*5);
        }
        return commentDtoList;
    }


}
