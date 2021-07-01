import React, { useRef, useCallback, useEffect } from "react"

import { Backdrop, ModalWrapper, ModalContent, CloseModalButton } from "./ModalElements"

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
          <ModalWrapper isModalShown={isSubmitted}>
            <ModalContent>
              <h1>Booking accepted</h1>
              <p>{values.username}</p>
              <p>{values.people}</p>
              <p>{values.date}</p>
              <p>{values.time}</p>
            </ModalContent>
            <CloseModalButton arial-label="close modal" onClick={() => setIsSubmitted(!isSubmitted)} />
          </ModalWrapper>
        </Backdrop>
      )}
    </>
  )
}

export default Modal
