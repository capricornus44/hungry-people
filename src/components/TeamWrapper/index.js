import React from "react"

import {
  TeamSection,
  TeamContainer,
  TeamContent,
  TeamDescription,
  TeamTitle,
  TeamSubtitle,
  TeamText,
  TeamDecoration,
} from "./TeamElements"
import { Line, Square } from "../shared"
import chef from "../../assets/images/chef.jpg"

const TeamWrapper = () => {
  return (
    <>
      <TeamSection>
        <TeamContainer>
          <TeamContent>
            <TeamDescription>
              <TeamTitle>Master chef</TeamTitle>
              <Line />
              <TeamSubtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor
                magna.
              </TeamSubtitle>
              <TeamText>
                Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed
                dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris
                tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
              </TeamText>
            </TeamDescription>
            <TeamDecoration>
              <img src={chef} alt="chef" />
              <Square style={{ top: 0, left: 0, transform: "translate(-50%, 50% )" }} />
            </TeamDecoration>
          </TeamContent>
        </TeamContainer>
      </TeamSection>
    </>
  )
}

export default TeamWrapper
