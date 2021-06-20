import React from "react"

import {
  BookingSection,
  BookingContainer,
  BookingContent,
  BookingDescription,
  BookingTitle,
  BookingForm,
  FormInput,
  FormButton,
  BookingDecoration,
} from "./BookingElements"
import { Line, Square } from "../shared"
import booking from "../../assets/images/booking.jpg"

const BookingWrapper = () => {
  return (
    <>
      <BookingSection>
        <BookingContainer>
          <BookingContent>
            <BookingDescription>
              <BookingTitle>Book a table</BookingTitle>
              <Line />
              <BookingForm>
                <FormInput type="text" placeholder="Name" />
                <FormInput type="email" placeholder="Email" />
                <FormInput type="tel" placeholder="Phone" />
                <FormInput type="text" placeholder="People" />
                <FormInput type="text" placeholder="Date (mm/dd)" />
                <FormInput type="text" placeholder="Time" />
                <FormButton type="submit">Book now</FormButton>
              </BookingForm>
            </BookingDescription>
            <BookingDecoration>
              <img src={booking} alt="chef" />
              <Square style={{ top: 0, right: 0, transform: "translate(50%, 50% )" }} />
            </BookingDecoration>
          </BookingContent>
        </BookingContainer>
      </BookingSection>
    </>
  )
}

export default BookingWrapper
