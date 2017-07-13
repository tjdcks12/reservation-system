package kr.or.connect.reservation.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Created by ODOL on 2017. 7. 13..
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
    //"SELECT P.id, P.category_id, P.name, P.description, DI.place_name, F.file_name, F.save_file_name"
    private Long id;
    private Long categoryId;
    private String name;
    private String description;
    private String placeName;
    private String fileName;
    private String saveFileName;
}
