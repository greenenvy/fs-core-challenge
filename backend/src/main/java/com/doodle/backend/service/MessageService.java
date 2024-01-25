package com.doodle.backend.service;

import com.doodle.backend.domain.Message;
import com.doodle.backend.exception.BackendChallengeException;
import com.doodle.backend.repository.MessageRepository;
import com.doodle.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class MessageService {
    private final MessageRepository messageRepository;
    private final UserRepository userRepository;

    @Autowired
    public MessageService(MessageRepository messageRepository, UserRepository userRepository) {
        this.messageRepository = messageRepository;
        this.userRepository = userRepository;
    }

    public List<Message> getMessages() {
        return this.messageRepository.findAll(Sort.by(Sort.Direction.ASC, "posted"));
    }

    public Message postMessage(Message message) {
        this.userRepository.findUserByUsername(message.getSender()).orElseThrow(() -> new BackendChallengeException(
            "Sender does not exist",
            "404",
            HttpStatus.NOT_FOUND
        ));
        message.setPosted(new Date());
        return this.messageRepository.insert(message);
    }
}
