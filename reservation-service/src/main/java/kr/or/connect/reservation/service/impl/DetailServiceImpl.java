package kr.or.connect.reservation.service.impl;

import kr.or.connect.reservation.dao.DetailDao;
import kr.or.connect.reservation.domain.dto.DetailDto;
import kr.or.connect.reservation.domain.dto.ReviewDto;
import kr.or.connect.reservation.service.DetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by ODOL on 2017. 7. 17..
 */
@Service
public class DetailServiceImpl implements DetailService{
    @Autowired
    DetailDao detailDao;

    @Override
    @Transactional(readOnly = true)
    public List<DetailDto> getProductFilesByProductId(Long id) {
        return detailDao.selectFilesByProductId(id);
    }

//    @Override
//    @Transactional(readOnly = true)
//    public List<ReviewDto> getReviewsByProductIdUseLimit(Long id) {
//        return detailDao.selectReviewsByProductIdUseLimit(id);
//    }

    @Override
    @Transactional(readOnly = true)
    public List<ReviewDto> getReviewsByProductId(Long id) {
        return detailDao.selectReviewsByProductId(id);
    }
}
