package bicycle.reservation.service;

import bicycle.reservation.model.dto.CommentDto;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CommnetService {
    @Transactional(readOnly = true)
    List<CommentDto> getRecentCommnetDto(Integer productId);
}
