import React from "react"

import useForm from "../../hooks/useForm"
import validate from "../../utils/validateInfo"

import {
  BookingSection,
  BookingContainer,
  BookingContent,
  MainContent,
  BookingDescription,
  BookingTitle,
  BookingForm,
  FormInputs,
  FormInput,
  FormButton,
  BookingDecoration,
  ContactInfo,
} from "./BookingElements"
import { Line, Square } from "../shared"
import booking from "../../assets/images/booking.jpg"

const BookingWrapper = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate)

  return (
    <>
      <BookingSection>
        <BookingContainer>
          <BookingContent>
            <MainContent>
              <BookingDescription>
                <BookingTitle>Book a table</BookingTitle>
                <Line />
                <BookingForm onSubmit={handleSubmit}>
                  <FormInputs>
                    <FormInput
                      type="text"
                      name="username"
                      value={values?.username}
                      onChange={handleChange}
                      placeholder="Name"
                    />
                    {errors.username && <p>{errors.username}</p>}
                  </FormInputs>
                  <FormInputs>
                    <FormInput
                      type="email"
                      name="email"
                      value={values?.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </FormInputs>
                  <FormInputs>
                    <FormInput
                      type="tel"
                      name="phone"
                      value={values?.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                    />
                    {errors.phone && <p>{errors.phone}</p>}
                  </FormInputs>
                  <FormInputs>
                    <FormInput
                      type="text"
                      name="people"
                      value={values?.people}
                      onChange={handleChange}
                      placeholder="People"
                    />
                    {errors.people && <p>{errors.people}</p>}
                  </FormInputs>
                  <FormInputs>
                    <FormInput
                      type="text"
                      name="date"
                      value={values?.date}
                      onChange={handleChange}
                      placeholder="Date (mm/dd)"
                    />
                    {errors.date && <p>{errors.date}</p>}
                  </FormInputs>
                  <FormInputs>
                    <FormInput
                      type="text"
                      name="time"
                      value={values?.time}
                      onChange={handleChange}
                      placeholder="Time"
                    />
                    {errors.time && <p>{errors.time}</p>}
                  </FormInputs>
                  <FormButton type="submit">Book now</FormButton>
                </BookingForm>
              </BookingDescription>
              <BookingDecoration>
                <img src={booking} alt="chef" />
                <Square style={{ top: 0, right: 0, transform: "translate(50%, 50% )" }} />
              </BookingDecoration>
            </MainContent>
            <ContactInfo>
              <p>
                Mon - Fri:&nbsp;<strong>8PM - 10PM</strong>,&nbsp; Sat - Sun:&nbsp;<strong>8PM - 3AM</strong>
                ,&nbsp;Phone:&nbsp;
                <strong>+40 729 131 637/+40 726 458 782</strong>
              </p>
            </ContactInfo>
          </BookingContent>
        </BookingContainer>
      </BookingSection>
    </>
  )
}

export default BookingWrapper
