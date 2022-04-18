import React from "react";
import styled from "styled-components";

export enum SeatType {
  Number,
}

const StyledButton = styled.button`
  background: #727171;
  border: none;
  /* border-radius: 50px; */
  color: #ffff;
  font-size: 24px;

  /* height: 12px;
  width: 15px; */
  margin: 3px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

type SeatProps = React.HTMLProps<HTMLButtonElement> & {
  seatType?: SeatType;
  height?: number;
  label: string;
  position?: [x: number, y: number];
  width?: number;
};

const Seat: React.FC<SeatProps> = ({
  seatType = SeatType.Number,
  height,
  label,
  position,
  width,
  onClick,
}) => {
  const styles: React.CSSProperties = {};
  if (position) {
    styles.gridColumnStart = position[0] + 1;
    styles.gridRowStart = position[1] + 1;
  }
  if (height) {
    styles.gridRowEnd = `span ${height}`;
  }
  if (width) {
    styles.gridColumnEnd = `span ${width}`;
  }
  if (seatType === SeatType.Number) {
    styles.color = "#f2ecec";
    styles.background = "#101111";
  }
  return (
    <StyledButton onClick={onClick} style={styles}>
      {label}
    </StyledButton>
  );
};

export default Seat;
