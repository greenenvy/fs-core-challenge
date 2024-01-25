package com.doodle.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "chat")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Message {
    private String _id;
    private String sender;
    private String content;
    private Date posted;
}
