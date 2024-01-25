package com.doodle.backend.web.controller;

import com.doodle.backend.domain.Message;
import com.doodle.backend.service.MessageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "message")
public class MessageController {
    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @GetMapping(
        value = "/all",
        produces = "application/json"
    )
    public ResponseEntity<List<Message>> getMessages() {
        List<Message> messages = this.messageService.getMessages();
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }
}
