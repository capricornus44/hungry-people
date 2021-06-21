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
                <img src={weddings} alt="weddings" style={{ borderRadius: "5px 0 0 5px" }} />
                <p style={{ writingMode: "vertical-lr", borderRadius: "0 5px 5px 0" }}>Weddings</p>
                <Square style={{ top: 0, left: 0, transform: "translate(-50%, 50% )" }} />
              </EventsDecoration>
              <EventsDecoration style={{ marginLeft: 40 }}>
                <p style={{ writingMode: "vertical-lr", transform: "rotate(-180deg)", borderRadius: "0 5px 5px 0" }}>
                  Corporative parties
                </p>
                <img src={corporatives} alt="corporatives" style={{ borderRadius: "0 5px 5px 0" }} />
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
