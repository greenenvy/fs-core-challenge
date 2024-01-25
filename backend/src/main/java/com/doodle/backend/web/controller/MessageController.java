package com.doodle.backend.web.controller;

import com.doodle.backend.domain.Message;
import com.doodle.backend.service.MessageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(
        value = "/post",
        consumes = "application/json",
        produces = "application/json"
    )
    public ResponseEntity<Message> postMessage(@RequestBody Message message) {
        Message retVal = this.messageService.postMessage(message);
        return new ResponseEntity<>(retVal, HttpStatus.OK);
    }
}
