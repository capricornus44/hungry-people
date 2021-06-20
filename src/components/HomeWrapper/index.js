import React from "react"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

import {
  HomeBox,
  HomeContainer,
  HomeContent,
  WorkTime,
  MainInfo,
  Description,
  Buttons,
  Button,
  SocialLinks,
  SocialLink,
} from "./HomeElements"
import { Line } from "../shared"

const HomeWrapper = () => {
  return (
    <>
      <HomeBox>
        <HomeContainer>
          <HomeContent>
            <WorkTime>
              <p>Mon - Fri:&nbsp; 8PM - 10PM,&nbsp; Sat - Sun:&nbsp; 8PM - 3AM</p>
            </WorkTime>

            <MainInfo>
              <Description>
                <p>Restaurant</p>
                <h1>Hungry people</h1>
              </Description>
              <Line />
              <Buttons>
                <Button to="/booking">Book table</Button>
                <Button to="/menu">Explore</Button>
              </Buttons>
            </MainInfo>

            <SocialLinks>
              <SocialLink href="https://www.facebook.com/" target="_blank">
                <FaFacebookF fontSize="20" />
              </SocialLink>
              <SocialLink href="https://twitter.com/?lang=en" target="_blank">
                <FaTwitter fontSize="20" />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/?hl=en" target="_blank">
                <FaInstagram fontSize="20" />
              </SocialLink>
            </SocialLinks>
          </HomeContent>
        </HomeContainer>
      </HomeBox>
    </>
  )
}

export default HomeWrapper
