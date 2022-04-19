package com.teamig.ticket_websocket.model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Ticket {
    public String name;
    public boolean available;
}
