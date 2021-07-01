import styled, { keyframes } from "styled-components"
import { MdClose } from "react-icons/md"

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -50px;
  background-color: rgba(0, 0, 0, 0.8);
`
export const ModalWrapper = styled.div`
  position: relative;
  width: 50rem;
  height: 30rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #000000;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  z-index: 100;
  animation: 0.25s ${fadeIn} ease-out;
`
export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.625rem 0 0 0.625rem;
`
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 5rem 2rem;
  border-radius: 0 0.625rem 0.625rem 0;
  background-color: #ffffff;

  h1 {
    margin-bottom: 3rem;
  }

  p:not(:last-child) {
    margin-bottom: 1 rem;
  }
`
export const CloseModalButton = styled(MdClose)`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  z-index: 100;
  cursor: pointer;
`
