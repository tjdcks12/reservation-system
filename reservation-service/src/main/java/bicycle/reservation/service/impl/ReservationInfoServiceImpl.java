package bicycle.reservation.service.impl;

import bicycle.reservation.dao.CommentDao;
import bicycle.reservation.dao.ProductDao;
import bicycle.reservation.dao.ReservationInfoDao;
import bicycle.reservation.model.domain.ProductPrice;
import bicycle.reservation.model.domain.ReservationInfo;
import bicycle.reservation.model.dto.BookedListDto;
import bicycle.reservation.model.dto.ProductDetailDto;
import bicycle.reservation.service.ReservationInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@Service
public class ReservationInfoServiceImpl implements ReservationInfoService {

    private ReservationInfoDao reservationInfoDao;
    private ProductDao productDao;
    private CommentDao commentDao;

    @Autowired
    public ReservationInfoServiceImpl(ReservationInfoDao reservationInfoDao, ProductDao productDao, CommentDao commentDao) {
        this.reservationInfoDao = reservationInfoDao;
        this.productDao = productDao;
        this.commentDao = commentDao;
    }

    @Override
    @Transactional(readOnly = false)
    public Integer addReservationInfo(ReservationInfo reservationInfo) {
        reservationInfo.setReservationType(0); // 신청중
        reservationInfo.setCreateDate(new Date());
        reservationInfo.setReservationDate(new Date());

        return reservationInfoDao.insert(reservationInfo);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ReservationInfo> getReservationInfosByUserId(Long userId) {
        List<ReservationInfo> bookedLists = reservationInfoDao.selectReservationInfosByUserId(userId);
        return bookedLists;
    }

    @Override
    @Transactional(readOnly = true)
    public List<BookedListDto> getBookedListsByUserId(Long userId) {
        List<ReservationInfo> reservationInfos = reservationInfoDao.selectReservationInfosByUserId(userId);
        List<BookedListDto> bookedLists = new LinkedList<>();
        for (ReservationInfo info : reservationInfos) {
            Integer productId = info.getProductId();
            ProductDetailDto product = productDao.selectProductDetailDtoByProductId(productId);
            List<ProductPrice> productPrices = productDao.selectProductPricesByProductId(productId);
            BookedListDto bookedList = new BookedListDto();
            bookedList.setProductId(productId);
            bookedList.setUserId(info.getUserId());
            bookedList.setBookingNumber(info.getId());
            bookedList.setChildTicketCount(info.getChildTicketCount());
            bookedList.setGeneralTicketCount(info.getGeneralTicketCount());
            bookedList.setYouthTicketCount(info.getYouthTicketCount());
            bookedList.setPlaceName(product.getPlaceName());
            bookedList.setProductName(product.getName());
            bookedList.setReservationType(info.getReservationType());
            Integer totalPrice = 0;
            for (ProductPrice productPrice : productPrices) {
                Integer count = 0;
                switch (productPrice.getPriceType()) {
                    case 1:
                        count = info.getGeneralTicketCount();
                        break;
                    case 2:
                        count = info.getYouthTicketCount();
                        break;
                    case 3:
                        count = info.getChildTicketCount();
                        break;
                }
                if(count == null){
                    count = 0;
                }
                totalPrice += count * productPrice.getPrice();
            }
            bookedList.setTotalPrice(totalPrice);
            bookedLists.add(bookedList);
        }
        return bookedLists;
    }

    @Override
    @Transactional(readOnly = false)
    public Integer updateReservationTypeToCancelledByBookingNumber(Integer bookingNumber) {
        ReservationInfo reservationInfo = reservationInfoDao.selectReservationInfoByBookingNumber(bookingNumber);
        reservationInfo.setReservationType(3);
        return reservationInfoDao.update(reservationInfo);
    }

    @Override
    public BookedListDto getBookedListByBookingNumber(Integer bookingNumber) {
        ReservationInfo info = reservationInfoDao.selectReservationInfoByBookingNumber(bookingNumber);
        Integer productId = info.getProductId();
        ProductDetailDto product = productDao.selectProductDetailDtoByProductId(productId);
        List<ProductPrice> productPrices = productDao.selectProductPricesByProductId(productId);
        BookedListDto bookedList = new BookedListDto();
        bookedList.setProductId(productId);
        bookedList.setUserId(info.getUserId());
        bookedList.setBookingNumber(info.getId());
        bookedList.setChildTicketCount(info.getChildTicketCount());
        bookedList.setGeneralTicketCount(info.getGeneralTicketCount());
        bookedList.setYouthTicketCount(info.getYouthTicketCount());
        bookedList.setPlaceName(product.getPlaceName());
        bookedList.setProductName(product.getName());
        bookedList.setReservationType(info.getReservationType());
        Integer totalPrice = 0;
        for (ProductPrice productPrice : productPrices) {
            Integer count = 0;
            switch (productPrice.getPriceType()) {
                case 1:
                    count = info.getGeneralTicketCount();
                    break;
                case 2:
                    count = info.getYouthTicketCount();
                    break;
                case 3:
                    count = info.getChildTicketCount();
                    break;
            }
            if(count == null){
                count = 0;
            }
            totalPrice += count * productPrice.getPrice();
        }
        bookedList.setTotalPrice(totalPrice);
        return bookedList;
    }

}