import React from "react";
import "./App.css";
import SeatPicker from "./SeatPicker";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background: #c5e7f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <SeatPicker seatNumber={"5"}></SeatPicker>
      </Container>
    </div>
  );
}

export default App;
