package kr.or.connect.reservation.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

/**
 * Created by ODOL on 2017. 7. 17..
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDto {
    private Long id;
    private Long productId;
    private String username;
    private Double score;
    private String comment;
    private String saveFileName;
    private Integer count;
}
