import React from "react"
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"

import useForm from "../../hooks/useForm"
import validate from "../../utils/validateInfo"

import {
  ContactSection,
  ContactContainer,
  ContactContent,
  MainContent,
  ContactDescription,
  ContactTitle,
  ContactSubtitle,
  ContactForm,
  FormInputs,
  FormInput,
  FormTextArea,
  FormButton,
  ContactDecoration,
  ContactInfo,
} from "./ContactElements"
import { Line } from "../shared"
import map from "../../assets/images/map.jpg"

const ContactWrapper = () => {
  const { values, errors, isSubmitted, setIsSubmitted, handleChange, handleSubmit } = useForm(validate)

  return (
    <>
      <ContactSection>
        <ContactContainer>
          <ContactContent>
            <MainContent>
              <ContactDescription>
                <ContactTitle>Contact</ContactTitle>
                <Line />
                <ContactSubtitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor
                  magna.
                </ContactSubtitle>
                <ContactForm onSubmit={handleSubmit}>
                  <FormInputs>
                    <FormInput
                      type="text"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      placeholder="Name"
                    />
                    {errors.username && <p>{errors.username}</p>}
                  </FormInputs>
                  <FormInputs>
                    <FormInput
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </FormInputs>
                  <FormInputs>
                    <FormInput
                      type="tel"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                    />
                    {errors.phone && <p>{errors.phone}</p>}
                  </FormInputs>
                  <FormInputs>
                    <FormTextArea
                      type="text"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      placeholder="Message"
                    />
                    {errors.message && <p>{errors.message}</p>}
                  </FormInputs>
                  <FormButton type="submit">Send message</FormButton>
                </ContactForm>
              </ContactDescription>
              <ContactDecoration>
                <a href="https://goo.gl/maps/WStNev1zDtSTXggw5" target="_blank" rel="noreferrer noopenner">
                  <img src={map} alt="map" />
                </a>
              </ContactDecoration>
            </MainContent>
            <ContactInfo>
              <FaMapMarkerAlt />
              <p>Mason St, Portland, USA</p>
              <FaPhone />
              <p>+40 729 131 637/+40 726 458 782</p>
              <FaEnvelope />
              <p>office@mindblister.com</p>
            </ContactInfo>
          </ContactContent>
        </ContactContainer>
      </ContactSection>
    </>
  )
}

export default ContactWrapper
