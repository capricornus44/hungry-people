import React, { useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md"
import { MdKeyboardArrowLeft } from "react-icons/md"

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
import SliderButton from "../shared/SliderButton"

import teamDB from "../../db/teamDB"

const TeamWrapper = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const length = teamDB.length

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
  }

  if (!Array.isArray(teamDB) || teamDB.length <= 0) {
    return null
  }

  return (
    <>
      <TeamSection>
        <TeamContainer>
          {teamDB.map((teamMember, index) => (
            <TeamContent key={teamMember.id} className={index === currentSlide ? "slide active" : "slide"}>
              {index === currentSlide && (
                <>
                  <TeamDescription>
                    <TeamTitle>{teamMember.rank}</TeamTitle>
                    <Line />
                    <TeamSubtitle>{teamMember.subtitle}</TeamSubtitle>
                    <TeamText>{teamMember.text}</TeamText>
                  </TeamDescription>
                  <TeamDecoration>
                    <img src={teamMember.image} alt={teamMember.rank} />
                    <Square style={{ top: 0, left: 0, transform: "translate(-50%, 50% )" }} />
                  </TeamDecoration>
                </>
              )}
            </TeamContent>
          ))}
        </TeamContainer>

        <SliderButton Icon={MdKeyboardArrowRight} moveSlide={nextSlide} direction="next" />
        <SliderButton Icon={MdKeyboardArrowLeft} moveSlide={prevSlide} direction="prev" />
      </TeamSection>
    </>
  )
}

export default TeamWrapper
