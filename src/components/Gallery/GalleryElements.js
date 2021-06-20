import styled from "styled-components"

import specialtiesBg from "../../assets/images/specialties-bg.jpg"

export const GallerySection = styled.div`
  height: 100vh;

  background-image: url(${specialtiesBg});
  background-position: center;
  background-size: cover;
  background-repeate: no-repeate;
`
export const GalleryContainer = styled.div`
  width: 1170px;
  height: 100%;
  margin: 0 auto;
`
export const GalleryContent = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`
export const GalleryDescription = styled.div`
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
export const GalleryTitle = styled.h1`
  font-family: "Benne", serif;
  font-size: 36px;
  line-height: 1.33;

  color: #ffffff;
  text-transform: uppercase;
`
export const GallerySubtitle = styled.strong`
  display: block;
  margin-top: 15px;
`
export const GalleryText = styled.p`
  margin-top: 20px;
  font-size: 16px;
`
export const GalleryDecoration = styled.div`
  position: relative;
  order: 1;
  width: 475px;
  height: 475px;

  img {
    border-radius: 8px;
    filter: drop-shadow(0px 0px 50px #000000);
  }
`
