package kr.or.connect.reservation.service;

import kr.or.connect.reservation.domain.dto.DetailDto;
import kr.or.connect.reservation.domain.dto.ReviewDto;

import java.util.List;

/**
 * Created by ODOL on 2017. 7. 17..
 */
public interface DetailService {
    List<DetailDto> getProductFilesByProductId(Long id);
//    List<ReviewDto> getReviewsByProductIdUseLimit(Long id);
    List<ReviewDto> getReviewsByProductId(Long id);
}
