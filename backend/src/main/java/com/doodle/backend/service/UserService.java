package com.doodle.backend.service;

import com.doodle.backend.domain.User;
import com.doodle.backend.exception.BackendChallengeException;
import com.doodle.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User login(User user) {
        return this.userRepository.findUserByUsername(user.getUsername()).
            orElseThrow(() -> new BackendChallengeException(
                    "User does not exist",
                    "User does not exist",
                    HttpStatus.NOT_FOUND
            ));
    }
}
