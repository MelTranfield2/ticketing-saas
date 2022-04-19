import styled from "styled-components";
import Seat from "./Seat";
import { Ticket } from "./App";

const Container = styled.div`
  background: #c5e7f3;
  flex: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 80px repeat(4, 80px);
  grid-template-rows: 80px repeat(5, 80px);
`;

export type SeatPickerProps = {
  tickets: Ticket[];
};

const SeatPicker: React.FC<SeatPickerProps> = ({ tickets }) => {
  return (
    <Grid>
      {tickets.map((ticket: Ticket) => {
        return (
          <Container>
            <Seat
              key={ticket.name}
              label={ticket.name}
              width={10}
              height={10}
              isAvailable={ticket.available}
            ></Seat>
          </Container>
        );
      })}
    </Grid>
  );
};

export default SeatPicker;
