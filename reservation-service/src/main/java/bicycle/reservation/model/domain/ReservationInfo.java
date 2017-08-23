package bicycle.reservation.model.domain;

import java.util.Date;

public class ReservationInfo {
    Integer id;
    Integer productId;
    Long userId;
    Integer generalTicketCount;
    Integer youthTicketCount;
    Integer childTicketCount;
    String reservationName;
    String reservationTel;
    String reservationEmail;
    Date reservationDate;
    Integer reservationType;
    Date createDate;
    Date modifyDate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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

    public Integer getChildTicketCount() {
        return childTicketCount;
    }

    public void setChildTicketCount(Integer childTicketCount) {
        this.childTicketCount = childTicketCount;
    }

    public String getReservationName() {
        return reservationName;
    }

    public void setReservationName(String reservationName) {
        this.reservationName = reservationName;
    }

    public String getReservationTel() {
        return reservationTel;
    }

    public void setReservationTel(String reservationTel) {
        this.reservationTel = reservationTel;
    }

    public String getReservationEmail() {
        return reservationEmail;
    }

    public void setReservationEmail(String reservationEmail) {
        this.reservationEmail = reservationEmail;
    }

    public Date getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(Date reservationDate) {
        this.reservationDate = reservationDate;
    }

    public Integer getReservationType() {
        return reservationType;
    }

    public void setReservationType(Integer reservationType) {
        this.reservationType = reservationType;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getModifyDate() {
        return modifyDate;
    }

    public void setModifyDate(Date modifyDate) {
        this.modifyDate = modifyDate;
    }

}