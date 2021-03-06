import styled, { css } from "styled-components/macro"

import teamBg from "../../assets/images/team/team-bg.jpg"

export const TeamSection = styled.div`
  height: 100vh;
  padding-top: 100px;
  background-image: url(${teamBg});
  background-position: center;
  background-size: cover;
  background-repeate: no-repeate;
`
export const TeamContainer = styled.div`
  display: flex;
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
    border-radius: 5px;
    filter: drop-shadow(0px 0px 50px #000000);
  }
`
const SlideBtnStyles = css`
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  outline: none;
  border-radius: 50%;
  font-size: 3rem;
  color: #e8c300;
  background-color: transparent;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`
export const NextSlideBtn = styled.button`
  ${SlideBtnStyles}
  right: 32px;
  transform: translate(50%, -50%);
`
export const PrevSlideBtn = styled.button`
  ${SlideBtnStyles}
  left: 32px;
  transform: translate(-50%, -50%);
`
