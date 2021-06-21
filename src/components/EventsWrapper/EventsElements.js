import styled from "styled-components"

import specialtiesBg from "../../assets/images/specialties-bg.jpg"

export const EventsSection = styled.div`
  height: 100vh;

  background-image: url(${specialtiesBg});
  background-position: center;
  background-size: cover;
  background-repeate: no-repeate;
`
export const EventsContainer = styled.div`
  width: 1170px;
  height: 100%;
  margin: 0 auto;
`
export const EventsContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 50px;
`
export const DecorationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`
export const EventsDecoration = styled.div`
  position: relative;
  display: flex;
  width: 475px;
  height: 475px;

  p {
    display: flex;
    align-items: center;
    width: 80px;
    height: 475px;
    border-radius: 5px 0px 0px 5px;

    font-family: "Benne", serif;
    font-size: 24px;
    line-height: 0.5;
    text-indent: 20px;
    text-transform: uppercase;
    color: #ffffff;
    background-color: #000000;
  }

  img {
    width: 395px;
    border-radius: 0 5px 5px 0;
    filter: drop-shadow(0px 0px 50px #000000);
  }
`
export const EventsContactInfo = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.55;

  color: rgba(255, 255, 255, 0.5);
`
