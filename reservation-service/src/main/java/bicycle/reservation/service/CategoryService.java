package bicycle.reservation.service;

import bicycle.reservation.model.domain.Category;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


public interface CategoryService {
    @Transactional(readOnly = true)
    List<Category> getCategory();
    @Transactional(readOnly = false)
    Category insertCategory(Category category);
}
