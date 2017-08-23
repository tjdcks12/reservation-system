package bicycle.reservation.service;

import bicycle.reservation.model.domain.File;
import bicycle.reservation.model.dto.CommentDto;
import bicycle.reservation.model.dto.CommentRegisterFormDto;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

public interface CommentService {
    @Transactional(readOnly = true)
    List<CommentDto> getRecentCommnetDto(Integer productId);

}
