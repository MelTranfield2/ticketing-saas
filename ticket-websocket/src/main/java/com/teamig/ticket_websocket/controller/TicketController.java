package com.teamig.ticket_websocket.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.ArrayList;

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
    private ArrayList<String> randomTicket(@Payload Tickets tickets) {
        ArrayList<String> tickArray = new ArrayList<String>();
        ArrayList<String> removeArray = new ArrayList<String>();
        for (int i = 1; i < 101; i++) {
            tickArray.add("a" + i);
        }
        Random random_seat = new Random();
        for (int i = 0; i < 5; i++) {
            int index = random_seat.nextInt(tickArray.size());
            removeArray.add(tickArray.get(index));
        }
        return removeArray;
    }
}
