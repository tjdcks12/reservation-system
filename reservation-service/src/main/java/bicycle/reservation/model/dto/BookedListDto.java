package bicycle.reservation.model.dto;

import javax.validation.constraints.Size;
import java.util.Date;

public class BookedListDto {
    Long userId;
    Integer bookingNumber;
    Integer productId;
    String productName;
    Date startDate;
    Date endDate;
    Integer generalTicketCount;
    Integer youthTicketCount;
    Integer childTicketCount;
    String placeName;
    Integer commentId;
    Integer reservationType;
    Integer totalPrice;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Integer getBookingNumber() {
        return bookingNumber;
    }

    public void setBookingNumber(Integer bookingNumber) {
        this.bookingNumber = bookingNumber;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Integer getGeneralTicketCount() {
        return generalTicketCount;
    }

    public void setGeneralTicketCount(Integer generalTicketCount) {
        this.generalTicketCount = generalTicketCount;
    }

    public Integer getYouthTicketCount() {
        return youthTicketCount;
    }

    public void setYouthTicketCount(Integer youthTicketCount) {
        this.youthTicketCount = youthTicketCount;
    }

    public Integer getCommentId() {
        return commentId;
    }

    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }

    public Integer getChildTicketCount() {
        return childTicketCount;
    }

    public void setChildTicketCount(Integer childTicketCount) {
        this.childTicketCount = childTicketCount;
    }

    public String getPlaceName() {
        return placeName;
    }

    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    public Integer getReservationType() {
        return reservationType;
    }

    public void setReservationType(Integer reservationType) {
        this.reservationType = reservationType;
    }

    public Integer getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Integer totalPrice) {
        this.totalPrice = totalPrice;
    }

}