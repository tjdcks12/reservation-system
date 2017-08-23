package bicycle.reservation.dao;

import bicycle.reservation.model.domain.User;

import java.util.Collection;

public interface UserDao {
    Integer insert(User user);
    Collection<User> selectAll();
    User selectById(Long userId);
    User selectBySnsId(String userSnsId);
}