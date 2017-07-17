package kr.or.connect.reservation.controller;

import kr.or.connect.reservation.domain.dto.ReviewDto;
import kr.or.connect.reservation.service.DetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by ODOL on 2017. 7. 18..
 */
@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    @Autowired
    DetailService detailService;

    @GetMapping("/{productId}")
    public List<ReviewDto> getReviews(@PathVariable("productId") Long id) {
        return detailService.getReviewsByProductId(id);
    }

}
