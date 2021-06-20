import React from "react"

import {
  AboutSection,
  AboutContainer,
  AboutContent,
  AboutDescription,
  AboutTitle,
  AboutSubtitle,
  AboutText,
  AboutDecoration,
} from "./AboutElements"
import { Line, Square } from "../shared"
import fireplase from "../../assets/images/about.jpg"

const AboutWrapper = () => {
  return (
    <>
      <AboutSection>
        <AboutContainer>
          <AboutContent>
            <AboutDescription>
              <AboutTitle>ABOUT US</AboutTitle>
              <Line />
              <AboutSubtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor
                magna.
              </AboutSubtitle>
              <AboutText>
                Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed
                dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris
                tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
              </AboutText>
            </AboutDescription>

            <AboutDecoration>
              <img src={fireplase} alt="fireplace" />
              <Square style={{ top: 0, right: 0, transform: "translate(50%, 50% )" }} />
            </AboutDecoration>
          </AboutContent>
        </AboutContainer>
      </AboutSection>
    </>
  )
}

export default AboutWrapper
