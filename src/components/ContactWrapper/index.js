import React from "react"
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"

import {
  ContactSection,
  ContactContainer,
  ContactContent,
  MainContent,
  ContactDescription,
  ContactTitle,
  ContactSubtitle,
  ContactForm,
  FormInput,
  FormTextArea,
  FormButton,
  ContactDecoration,
  ContactInfo,
} from "./ContactElements"
import { Line } from "../shared"
import map from "../../assets/images/map.jpg"

const ContactWrapper = () => {
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
                <ContactForm>
                  <FormInput type="text" placeholder="Number" />
                  <FormInput type="email" placeholder="Email" />
                  <FormInput type="tel" placeholder="Phone" />
                  <FormTextArea type="text" placeholder="Message" />
                  <FormButton>Send message</FormButton>
                </ContactForm>
              </ContactDescription>
              <ContactDecoration>
                <a href="https://goo.gl/maps/WStNev1zDtSTXggw5" target="_blank" rel="noreferrer">
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
