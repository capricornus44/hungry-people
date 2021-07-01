import styled from "styled-components"

export const BookingSection = styled.div`
  height: 100vh;

  background-color: #ffffff;
`
export const BookingContainer = styled.div`
  width: 1170px;
  height: 100%;
  margin: 0 auto;
`
export const BookingContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 50px;
`
export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`
export const BookingDescription = styled.div`
  flex: 1;
  order: 1;
  margin-right: 80px;

  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.357;
  text-align: center;

  color: rgba(51, 51, 51, 0.5);
`
export const BookingTitle = styled.h1`
  font-family: "Benne", serif;
  font-size: 36px;
  line-height: 1.33;

  color: #000000;
  text-transform: uppercase;
`
export const BookingForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 15px 15px;
  margin-top: 15px;
`
export const FormInputs = styled.div`
  height: 100%;
  border-radius: 5px;

  p {
    color: red;
  }
`
export const FormInput = styled.input`
  height: 60px;
  padding: 0 20px;
  border: none;
  border-radius: 5px;
  outline: none;

  background-color: #e5e5e5;
`
export const FormButton = styled.button`
  grid-column: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 20px;
  border: none;
  border-radius: 5px;
  outline: none;

  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  line-height: 1.67;

  color: #ffffff;
  text-transform: uppercase;
  background-color: #e8c300;
  cursor: pointer;
`
export const BookingDecoration = styled.div`
  position: relative;
  order: 2;
  width: 475px;
  height: 475px;

  img {
    border-radius: 8px;
    filter: drop-shadow(0px 0px 50px rgba(0, 0, 0, 0.5));
  }
`
export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.55;
  color: #e8c300;

  p {
    margin-left: 5px;
    margin-right: 20px;
    color: rgba(0, 0, 0, 0.5);
  }
`
