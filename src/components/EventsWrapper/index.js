import React from "react"

import {
  EventsSection,
  EventsContainer,
  EventsContent,
  DecorationBox,
  EventsDecoration,
  EventsContactInfo,
} from "./EventsElements"
import { Square } from "../shared"
import weddings from "../../assets/images/events-1.jpg"
import corporatives from "../../assets/images/events-2.jpg"

const EventsWrapper = () => {
  return (
    <>
      <EventsSection>
        <EventsContainer>
          <EventsContent>
            <DecorationBox>
              <EventsDecoration style={{ marginRight: 40 }}>
                <img src={weddings} alt="weddings" />
                <p style={{ writingMode: "vertical-lr" }}>Weddings</p>
                <Square style={{ top: 0, left: 0, transform: "translate(-50%, 50% )" }} />
              </EventsDecoration>
              <EventsDecoration style={{ marginLeft: 40 }}>
                <p style={{ writingMode: "vertical-lr", transform: "rotate(-180deg)" }}>Corporative parties</p>
                <img src={corporatives} alt="corporatives" />
                <Square style={{ top: 0, right: 0, transform: "translate(50%, 50% )" }} />
              </EventsDecoration>
            </DecorationBox>
            <EventsContactInfo>
              For private events please call: <strong>+40 729 131 637 / +40 726 458 782</strong> or use the contact
              form.
            </EventsContactInfo>
          </EventsContent>
        </EventsContainer>
      </EventsSection>
    </>
  )
}

export default EventsWrapper
