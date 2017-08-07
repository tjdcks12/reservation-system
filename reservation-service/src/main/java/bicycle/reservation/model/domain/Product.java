package bicycle.reservation.model.domain;

import java.util.Date;

public class Product {
    private Integer id;
    private Integer categoryId;
    private String name;
    private String description;
    private Date salesStart;
    private Date salesEnd;
    private Integer salesFlag;
    private String event;
    private String createDate;
    private String modifyDate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getSalesStart() {
        return salesStart;
    }

    public void setSalesStart(Date salesStart) {
        this.salesStart = salesStart;
    }

    public Date getSalesEnd() {
        return salesEnd;
    }

    public void setSalesEnd(Date salesEnd) {
        this.salesEnd = salesEnd;
    }

    public Integer getSalesFlag() {
        return salesFlag;
    }

    public void setSalesFlag(Integer salesFlag) {
        this.salesFlag = salesFlag;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getModifyDate() {
        return modifyDate;
    }

    public void setModifyDate(String modifyDate) {
        this.modifyDate = modifyDate;
    }

}
