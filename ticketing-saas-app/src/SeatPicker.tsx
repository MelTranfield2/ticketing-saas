import styled from "styled-components";
import { useState } from "react";
import Seat from "./Seat";

const Container = styled.div`
  background: #c5e7f3;
  flex: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: 120px repeat(5, 80px);
`;

type SeatPickerProps = {
  seatNumber: string;
};

// const seats: number = 20;

// function GridSeatingLayout({ seats }) {
// get unique list of rows and seats in rows
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
// }

const SeatPicker: React.FC<SeatPickerProps> = ({ seatNumber }) => {
  const rows = 5;
  const columns = 4;
  return (
    <Container>
      <Grid>
        {Array.from({ length: rows }, (v, row) =>
          Array.from({ length: columns }, (v, column) => (
            <Seat
              label={"A" + (row * columns + column + 1)}
              position={[column, row + 1]}
              //   onClick={}
              data-testid={"seat" + (row * columns + column + 1)}
              key={"seat" + (row * columns + column + 1)}
            />
          ))
        )}
      </Grid>
    </Container>
  );
};

export default SeatPicker;
