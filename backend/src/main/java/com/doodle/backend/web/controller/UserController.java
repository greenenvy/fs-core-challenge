package com.doodle.backend.web.controller;

import com.doodle.backend.domain.User;
import com.doodle.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(
        value = "/login",
        consumes = "application/json",
        produces = "application/json"
    )
    public ResponseEntity<User> postMessage(@RequestBody User user) {
        User retVal = this.userService.login(user);
        return new ResponseEntity<>(retVal, HttpStatus.OK);
    }
}
