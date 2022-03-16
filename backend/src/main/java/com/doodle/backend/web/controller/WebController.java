package com.doodle.backend.web.controller;

import com.doodle.backend.exception.ClientNotFoundException;
import com.doodle.backend.model.HealthResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.doodle.backend.LogCodes.HEALTH_CHECK;

@RestController
@RequestMapping(value = "health")
public class WebController {

    private final Logger logger = LoggerFactory.getLogger(WebController.class);

    public WebController() {}

    @GetMapping
    public HttpEntity<HealthResponse> checkHealth() {
        logger.info(HEALTH_CHECK);
        throw new ClientNotFoundException("1");
    }

}
