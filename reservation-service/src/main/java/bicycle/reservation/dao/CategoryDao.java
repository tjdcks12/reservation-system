package bicycle.reservation.dao;

import bicycle.reservation.model.domain.Category;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface CategoryDao {
    List<Category> selectAllCategories();
    Category selectCategoryByCategoryId(int categoryId);
    Integer insertCategory(Category category);

}
