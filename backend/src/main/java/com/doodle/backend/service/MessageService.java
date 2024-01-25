package com.doodle.backend.service;

import com.doodle.backend.domain.Message;
import com.doodle.backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class MessageService {
    private final MessageRepository messageRepository;

    @Autowired
    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public List<Message> getMessages() {
        return this.messageRepository.findAll(Sort.by(Sort.Direction.ASC, "posted"));
    }

    public Message postMessage(Message message) {
        message.setPosted(new Date());
        return this.messageRepository.insert(message);
    }
}
