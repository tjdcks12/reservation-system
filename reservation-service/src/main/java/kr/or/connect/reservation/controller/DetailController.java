package kr.or.connect.reservation.controller;

import kr.or.connect.reservation.domain.dto.DetailDto;
import kr.or.connect.reservation.domain.dto.ReviewDto;
import kr.or.connect.reservation.service.DetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by ODOL on 2017. 7. 17..
 */
@RestController
@RequestMapping("/api/details")
public class DetailController {
    @Autowired
    DetailService detailService;

    @GetMapping("/{id}")
    public List<DetailDto> getProductFiles(@PathVariable("id") Long id) {
        return detailService.getProductFilesByProductId(id);
    }

    @GetMapping("/review/{productId}")
    public List<ReviewDto> getReviewsLimit(@PathVariable("productId") Long id) {
        return detailService.getReviewsByProductId(id);
    }
}
