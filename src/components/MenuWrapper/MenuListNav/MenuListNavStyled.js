import styled from "styled-components"
import { NavLink } from "react-router-dom"

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
