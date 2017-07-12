package kr.or.connect.reservation.domain;

import lombok.*;

import java.util.Date;

/**
 * Created by ODOL on 2017. 7. 12..
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Product {
    private Long id;
    private Long categoryId;
    private String name;
    private String description;
    private Date salesStart;
    private Date salesEnd;
    private Long salesFlag;
    private String event;
    private Date createDate;
    private Date modifyDate;
}
