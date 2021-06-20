import styled from "styled-components"

export const AboutSection = styled.div`
  height: 100vh;
  background-color: #ebebeb;
`
export const AboutContainer = styled.div`
  width: 1170px;
  height: 100%;
  margin: 0 auto;
`
export const AboutContent = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`
export const AboutDescription = styled.div`
  flex: 1;
  margin-right: 80px;

  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.55;
  text-align: center;

  color: #000000;
`
export const AboutTitle = styled.h1`
  font-family: "Benne", serif;
  font-size: 36px;
  line-height: 1.33;
  text-transform: uppercase;
`
export const AboutSubtitle = styled.strong`
  display: block;
  margin-top: 15px;
`
export const AboutText = styled.p`
  margin-top: 20px;
  font-size: 16px;
`
export const AboutDecoration = styled.div`
  position: relative;
  width: 475px;
  height: 475px;

  img {
    border-radius: 5px;
    filter: drop-shadow(0px 0px 50px rgba(0, 0, 0, 0.5));
  }
`
