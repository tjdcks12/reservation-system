package bicycle.reservation.model.domain;

import java.util.Date;

public class User {
    Long id;
    String username;
    String email;
    String tel;
    String nickname;
    String snsId;
    String snsType;
    String snsProfile;
    Integer adminFlag;
    Date createDate;
    Date modifyDate;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getTel() {
        return tel;
    }
    public void setTel(String tel) {
        this.tel = tel;
    }
    public String getNickname() {
        return nickname;
    }
    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
    public String getSnsId() {
        return snsId;
    }
    public void setSnsId(String snsId) {
        this.snsId = snsId;
    }
    public String getSnsType() {
        return snsType;
    }
    public void setSnsType(String snsType) {
        this.snsType = snsType;
    }
    public String getSnsProfile() {
        return snsProfile;
    }
    public void setSnsProfile(String snsProfile) {
        this.snsProfile = snsProfile;
    }
    public Integer getAdminFlag() {
        return adminFlag;
    }
    public void setAdminFlag(Integer adminFlag) {
        this.adminFlag = adminFlag;
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