import styled from "styled-components"

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 20px 80px;
`
export const MenuCell = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.35fr;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 10px;

  strong {
    font-family: "Benne", serif;
    font-size: 18px;
    line-height: 1;
    text-transform: uppercase;
  }

  p {
    font-size: 12px;
    line-height: 1;
    color: rgba(51, 51, 51, 0.5);
  }

  span {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    font-family: "Benne", serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
  }
`
