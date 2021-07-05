import React, { useRef, useCallback, useEffect } from "react"

import { Backdrop, ModalWrapper, ModalContent, CloseModalButton } from "./ModalElements"

const Modal = ({ isSubmitted, setIsSubmitted }) => {
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
            <ModalContent>
              <h1>Your data was sent successfully</h1>
            </ModalContent>
            <CloseModalButton arial-label="close modal" onClick={() => setIsSubmitted(!isSubmitted)} />
          </ModalWrapper>
        </Backdrop>
      )}
    </>
  )
}

export default Modal
