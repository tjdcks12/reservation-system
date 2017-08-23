package bicycle.reservation.service.impl;

import bicycle.reservation.dao.UserDao;
import bicycle.reservation.model.domain.User;
import bicycle.reservation.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserDao userDao;

    @Override
    @Transactional(readOnly = false)
    public Integer addUser(User user) {
        return userDao.insert(user);
    }

    @Override
    @Transactional(readOnly = true)
    public Collection<User> getAll() {
        return userDao.selectAll();
    }

    @Override
    @Transactional(readOnly = true)
    public User getUserById(Long userId) {
        return userDao.selectById(userId);
    }



    @Override
    @Transactional(readOnly = true)
    public User getUserBySnsId(String userSnsId) {
        return userDao.selectBySnsId(userSnsId);
    }
}