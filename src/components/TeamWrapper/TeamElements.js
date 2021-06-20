import styled from "styled-components"

import teamBg from "../../assets/images/team-bg.jpg"

export const TeamSection = styled.div`
  height: 100vh;

  background-image: url(${teamBg});
  background-position: center;
  background-size: cover;
  background-repeate: no-repeate;
`
export const TeamContainer = styled.div`
  width: 1170px;
  height: 100%;
  margin: 0 auto;
`
export const TeamContent = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`
export const TeamDescription = styled.div`
  flex: 1;
  order: 2;
  margin-left: 80px;

  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.55;
  text-align: center;

  color: rgba(255, 255, 255, 0.9);
`
export const TeamTitle = styled.h1`
  font-family: "Benne", serif;
  font-size: 36px;
  line-height: 1.33;

  color: #ffffff;
  text-transform: uppercase;
`
export const TeamSubtitle = styled.strong`
  display: block;
  margin-top: 15px;
`
export const TeamText = styled.p`
  margin-top: 20px;
  font-size: 16px;
`
export const TeamDecoration = styled.div`
  position: relative;
  order: 1;
  width: 475px;
  height: 475px;

  img {
    border-radius: 8px;
    filter: drop-shadow(0px 0px 50px #000000);
  }
`
