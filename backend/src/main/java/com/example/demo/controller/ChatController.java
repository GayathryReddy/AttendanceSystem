package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/chat")
public class ChatController {

    @PostMapping
    public String chat(@RequestBody String message) {

        message = message.toLowerCase();

        if (message.contains("attendance")) {
            return "You can check attendance in the dashboard or percentage section.";
        }
        else if (message.contains("leave")) {
            return "You can apply leave using the leave module.";
        }
        else if (message.contains("hello")) {
            return "Hello! How can I help you today?";
        }
        else {
            return "Sorry, I didn’t understand. Try asking about attendance or leave.";
        }
    }
}
