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
    @SendTo("/database/ticketarray")
    private Tickets randomTicket(@Payload Tickets tickets) {
        ArrayList<String> tickArray = new ArrayList<String>();
        ArrayList<String> removeArray = new ArrayList<String>()
        for(int i = 1; i < 101; i++) {
            tickArray.add("a"+i)
        }
        for(int i = 0; i < 5; i++){
            String randStr = getRandomElement(tickArray)
            removeArray.add(randStr)
        }
        return removeArray;
    }
}
