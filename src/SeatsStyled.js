import styled from "styled-components";

export const SeatsContentStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 145px;
  .selected {
    background-color: #8dd7cf;
  }
  .true {
    background-color: #c3cfd9;
  }
  .false {
    background-color: #fbe192;
  }
`;
export const SeatsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px 7px;
  margin-top: 25px;
  max-width: 325px;
`;

export const SeatStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #c3cfd9;
  color: black;

  width: 26px;
  height: 26px;

  border: 1px solid #808f9d;
  border-radius: 50%;

  font-size: 11px;

  :disabled {
    background-color: #fbe192;
    pointer-events: none;
  }
`;
