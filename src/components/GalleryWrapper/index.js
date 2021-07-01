import React, { useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md"
import { MdKeyboardArrowLeft } from "react-icons/md"

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
import SliderButton from "../shared/SliderButton"

import galleryDB from "../../db/galleryDB"

const GalleryWrapper = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const length = galleryDB.length

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
  }

  if (!Array.isArray(galleryDB) || galleryDB.length <= 0) {
    return null
  }

  return (
    <>
      <GallerySection>
        <GalleryContainer>
          {galleryDB.map((galleryItem, index) => (
            <GalleryContent key={galleryItem.id} className={index === currentSlide ? "slide active" : "slide"}>
              {index === currentSlide && (
                <>
                  <GalleryDescription>
                    <GalleryTitle>{galleryItem.productName}</GalleryTitle>
                    <Line />
                    <GallerySubtitle>{galleryItem.subtitle}</GallerySubtitle>
                    <GalleryText>{galleryItem.text}</GalleryText>
                  </GalleryDescription>
                  <GalleryDecoration>
                    <img src={galleryItem.image} alt={galleryItem.productName} />
                    <Square style={{ top: 0, left: 0, transform: "translate(-50%, 50% )" }} />
                  </GalleryDecoration>
                </>
              )}
            </GalleryContent>
          ))}
        </GalleryContainer>

        <SliderButton Icon={MdKeyboardArrowRight} moveSlide={nextSlide} direction="next" />
        <SliderButton Icon={MdKeyboardArrowLeft} moveSlide={prevSlide} direction="prev" />
      </GallerySection>
    </>
  )
}

export default GalleryWrapper
