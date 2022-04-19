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

// function GridSeatingLayout({ seats }) {
//   // get unique list of rows and seats in rows
//   const rows = new Set(seats.map({ row } => row)).toArray().sort();
//   const rowSeats = new Set(seats.map({ rowSeat } => rowSeat)).toArray().sort();

//   return (
//     <div>
//       {rows.map((rrow) => (
//         <div>
//           {rowSeats.map((rrowSeat) => {
//              const seat = seats.find(({ row, rowSeat } => row === rrow && rowSeat === rrowSeat);
//              return (<Seat seat={seat} />);
//     </div>
//   );

export default App;
