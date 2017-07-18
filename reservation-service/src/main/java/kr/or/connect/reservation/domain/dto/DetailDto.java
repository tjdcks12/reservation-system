package kr.or.connect.reservation.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Created by ODOL on 2017. 7. 17..
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DetailDto {
    private Long id;
    private Long categoryId;
    private String event;
    private String content;
    private String name;
    private String saveFileName;
}
