import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const MenuSection = styled.div`
  height: 100vh;

  background-color: #ffffff;
`
export const MenuContainer = styled.div`
  width: 1170px;
  height: 100%;
  margin: 0 auto;
`
export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 75px;
`
export const MenuDescription = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.55;
  text-align: center;

  color: #000000;
`
export const MenuTitle = styled.h1`
  font-family: "Benne", serif;
  font-size: 36px;
  line-height: 1.33;
  text-transform: uppercase;
`
export const MenuSubtitle = styled.strong`
  display: block;
  width: 565px;
  margin-top: 15px;
`
export const MenuLinks = styled.div`
  display: flex;
  margin: 50px 0;
`
export const MenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 120px;

  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;

  color: #aabbcc;
  text-decoration: none;
  text-transform: uppercase;

  &:not(:last-child) {
    border-right: 1px solid rgba(51, 51, 51, 0.2);
  }

  &.active {
    color: #e8c300;
  }
`
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
