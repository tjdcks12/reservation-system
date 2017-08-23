package bicycle.reservation.service;

import bicycle.reservation.model.domain.User;
import java.util.Collection;

public interface UserService {
    Integer addUser(User user);
    Collection<User> getAll();
    User getUserById(Long userId);
    User getUserBySnsId(String userSnsId);
}
