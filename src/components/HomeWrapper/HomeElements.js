import styled from "styled-components"
import { Link } from "react-router-dom"

import bg from "../../assets/images/home-bg.jpg"

export const HomeBox = styled.div`
  height: 100vh;

  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeate: no-repeate;
`
export const HomeContainer = styled.div`
  width: 1170px;
  height: 100%;
  margin: 0 auto;
`
export const HomeContent = styled.div`
  display: grid;
  height: 100%;

  grid-template-columns: 1.5fr 9fr 1.5fr;
  align-items: center;

  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 12px;

  color: #ffffff;
`
export const WorkTime = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  p {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    line-height: 1;
    white-space: nowrap;
  }
`
export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-transform: uppercase;

  p {
    margin-bottom: 30px;

    line-height: 1.167;
    letter-spacing: 0.5em;
  }

  h1 {
    font-family: "Benne", serif;
    font-weight: 400;
    font-size: 96px;
    line-height: 1;
    white-space: nowrap;
  }
`
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`
export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 200px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;

  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.67;

  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &:hover {
    color: #000000;
    background-color: #e8c300;
    transition: all 250ms ease-in-out;
  }
`
export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #ffffff;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover {
    color: #000000;
    background-color: #e8c300;
    transition: all 250ms ease-in-out;
  }
`
