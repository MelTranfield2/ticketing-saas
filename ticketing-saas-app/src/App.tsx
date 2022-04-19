import React, { useState } from "react";
import "./App.css";
import SeatPicker from "./SeatPicker";
import styled from "styled-components";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const Container = styled.div`
  align-items: center;
  background: #c5e7f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
`;

export type Ticket = {
  name: string;
  available: boolean;
};

function App() {
  const [tickets, setTickets] = useState([]);

  const sock = new SockJS("http://localhost:8080/stomp");
  const stompClient = Stomp.over(sock);

  const onConnected = () => {
    console.log("connected");
    stompClient.subscribe("/allSeats", onMessageReceived);
    stompClient.send("/startTimer", {}, "{}");
  };

  const onMessageReceived = (payload: { body: string }) => {
    setTickets(JSON.parse(payload.body));
  };

  const onError = (err: any) => {
    console.error(err);
  };

  stompClient.connect({}, onConnected, onError);

  return (
    <div className="App">
      <Container>
        <SeatPicker tickets={tickets}></SeatPicker>
      </Container>
    </div>
  );
}

export default App;
