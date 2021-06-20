import styled from "styled-components"

export const Line = styled.span`
  content: "";
  display: inline-block;
  text-align: center;
  width: 60px;
  height: 5px;
  border-radius: 5px;

  background-color: #e8c300;
`
export const Square = styled.span`
  content: "";
  position: absolute;
  width: 250px;
  height: 250px;
  border: 20px solid #e8c300;
  border-radius: 5px;

  filter: drop-shadow(0 0 100px rgba(0, 0, 0, 0.5));
`
