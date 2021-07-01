import React, { useState, useRef, useCallback, useEffect } from "react"

import { Backdrop, ModalWrapper, ModalImage, ModalContent, CloseModalButton } from "./ModalElements"
import modal from "../../assets/images/modal.jpg"

const Modal = ({ isSubmitted, setIsSubmitted, values }) => {
  const modalRef = useRef()

  const closeModal = (e) => {
    if (modalRef.current === e.target) setIsSubmitted(!isSubmitted)
  }

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && isSubmitted) setIsSubmitted(!isSubmitted)
    },
    [isSubmitted, setIsSubmitted]
  )

  useEffect(() => {
    document.addEventListener("keydown", keyPress)
    return () => document.removeEventListener("keydown", keyPress)
  }, [keyPress])

  return (
    <>
      {isSubmitted && (
        <Backdrop ref={modalRef} onClick={closeModal}>
          <ModalWrapper isSubmitted={isSubmitted}>
            <ModalImage src={modal} alt="restaurant" />
            <ModalContent>
              <h1>Booking accepted</h1>
              <p>
                Reserved for: <strong>{values.username}</strong>
              </p>
              <p>
                Number of persons: <strong>{values.people}</strong>
              </p>
              <p>
                Date: <strong>{values.date}</strong>
              </p>
              <p>
                Time: <strong>{values.time}</strong>
              </p>
            </ModalContent>
            <CloseModalButton arial-label="close modal" onClick={() => setIsSubmitted(!isSubmitted)} />
          </ModalWrapper>
        </Backdrop>
      )}
    </>
  )
}

export default Modal
