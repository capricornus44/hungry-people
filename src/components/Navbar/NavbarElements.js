import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const Navigation = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-top: -100px;
  z-index: 10;
`
export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 100px;
  width: 1170px;
`
export const NavigationLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  // margin-right: 110px;
  border-bottom: 1px solid #aabbcc;
`
export const NavigationRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  margin-left: 110px;
  border-bottom: 1px solid #aabbcc;
`
export const NavigationLink = styled(NavLink)`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;

  color: #aabbcc;
  text-decoration: none;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 75px;
  }

  &.active {
    color: #e8c300;
  }
`
export const NavigationLogo = styled.img`
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translate(-50%);
  width: 150px;
  height: 150px;
`
