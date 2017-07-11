package kr.or.connect.reservation.service;

import kr.or.connect.reservation.domain.Category;

import java.util.List;

/**
 * Created by ODOL on 2017. 7. 7..
 */
public interface CategoryService {
    List<Category> getCategories();
    Category addCategory(Category category);
    int delete(Long id);
    int update(Category category);
}
