import React from "react"
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

import {
  GallerySection,
  GalleryContainer,
  GalleryContent,
  GalleryDescription,
  GalleryTitle,
  GallerySubtitle,
  GalleryText,
  GalleryDecoration,
} from "./GalleryElements"
import { Line, Square } from "../shared"
import specialties from "../../assets/images/specialties.jpg"

const GalleryWrapper = () => {
  return (
    <>
      <GallerySection>
        <GalleryContainer>
          <GalleryContent>
            <GalleryDescription>
              <GalleryTitle>Chocolate pancakes</GalleryTitle>
              <Line />
              <GallerySubtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor
                magna.
              </GallerySubtitle>
              <GalleryText>
                Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed
                dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris
                tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
              </GalleryText>
            </GalleryDescription>
            <GalleryDecoration>
              <img src={specialties} alt="Chocolate pancakes" />
              <Square style={{ top: 0, left: 0, transform: "translate(-50%, 50% )" }} />
            </GalleryDecoration>
          </GalleryContent>
        </GalleryContainer>
      </GallerySection>
    </>
  )
}

export default GalleryWrapper
