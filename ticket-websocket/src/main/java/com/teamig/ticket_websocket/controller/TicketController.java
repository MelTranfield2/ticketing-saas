package com.teamig.ticket_websocket.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.ArrayList;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

import com.teamig.ticket_websocket.model.Ticket;

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

    private Timer timer = null;

    static ArrayList<Ticket> tickArray = new ArrayList<Ticket>();
    
    static{
        for(int i = 1; i <= 20; i++) {
            tickArray.add(new Ticket("A"+i, true));
        }
    }

    @MessageMapping("/startTimer")
    private void startTimer() {
        if (timer == null) {
            System.out.println("Starting timer");
            
            simpMessagingTemplate.convertAndSend("/allSeats", tickArray);
            
            TimerTask task = new TimerTask() {
                public void run() {
                    System.out.println("Running timer");
                    for(int i = 0; i < 5; i++){
                        Ticket randomTicket = getRandomElement(tickArray);
                        randomTicket.available = false;
                    }
                    simpMessagingTemplate.convertAndSend("/allSeats", tickArray);
                }
            };

            timer = new Timer("Timer");
            
            long delay = 5000L;
            long rate = 5000L;
            timer.schedule(task, delay, rate);
        }
    }

    public Ticket getRandomElement(ArrayList<Ticket> list) { 
        Random rand = new Random(); 
        return list.get(rand.nextInt(list.size())); 
    }
}
