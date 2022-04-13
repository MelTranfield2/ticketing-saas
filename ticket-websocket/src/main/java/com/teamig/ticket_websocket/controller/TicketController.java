package com.teamig.ticket_websocket.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.teamig.ticket_websocket.model.Tickets;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class TicketController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/message")
    @SendTo("/database/public")
    private Tickets receivePublicMessage(@Payload Tickets tickets) {
        return tickets;
    }

    @MessageMapping("private-message")
    private Tickets receivePrivateMessage(@Payload Tickets tickets) {
        simpMessagingTemplate.convertAndSendToUser(tickets.getTicketArray(), "/private", tickets);
        System.out.println(tickets.toString());
        return tickets;
    }
}
