import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #d3d0d0;
  border: none;
  color: #ffffff;
  font-size: 24px;

  margin: 3px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  width: 80px;
  height: 80px;
`;

type SeatProps = React.HTMLProps<HTMLButtonElement> & {
  isAvailable: boolean;
  label: string;
  position?: [x: number, y: number];
};

const Seat: React.FC<SeatProps> = ({ isAvailable, label, position }) => {
  const styles: React.CSSProperties = {};
  if (position) {
    styles.gridColumnStart = position[0] + 1;
    styles.gridRowStart = position[1] + 1;
  }

  if (isAvailable) {
    styles.color = "#f2ecec";
    styles.background = "#101111";
  }
  return <StyledButton style={styles}>{label}</StyledButton>;
};

export default Seat;
