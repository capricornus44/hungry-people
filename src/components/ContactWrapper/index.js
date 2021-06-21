import React from "react"

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
                <a href="https://goo.gl/maps/WStNev1zDtSTXggw5" target="_blank" rel="noreferrer"></a>
              </ContactDecoration>
            </MainContent>
            <ContactInfo>
              5th London Boulevard, U.K. +40 729 131 637/+40 726 458 782 office@mindblister.com{" "}
            </ContactInfo>
          </ContactContent>
        </ContactContainer>
      </ContactSection>
    </>
  )
}

export default ContactWrapper
