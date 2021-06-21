import styled from "styled-components"

export const ContactSection = styled.div`
  height: 100vh;
  background-color: #ffffff;
`
export const ContactContainer = styled.div`
  width: 1170px;
  height: 100%;
  margin: 0 auto;
`
export const ContactContent = styled.div`
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
export const ContactDescription = styled.div`
  flex: 1;
  margin-right: 80px;

  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.55;
  text-align: center;

  color: rgba(51, 51, 51, 0.5);
`
export const ContactTitle = styled.h1`
  font-family: "Benne", serif;
  font-size: 36px;
  line-height: 1.33;

  color: #000000;
  text-transform: uppercase;
`
export const ContactSubtitle = styled.strong`
  display: block;
  margin-top: 15px;
  margin-bottom: 50px;

  color: #000000;
`
export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 60px 120px 60px;
  gap: 10px 10px;
`
export const FormInput = styled.input`
  text-indent: 20px;
  border: none;
  border-radius: 5px;
  outline: none;

  font-size: 14px;
  line-height: 1.357;
  background-color: #e5e5e5;
`
export const FormTextArea = styled.textarea`
  grid-column: span 3;
  grid-row: 2 / 3;
  padding: 20px 20px;
  border: none;
  border-radius: 5px;
  outline: none;

  font-size: 14px;
  line-height: 1.357;
  background-color: #e5e5e5;
`

export const FormButton = styled.button`
  grid-column: span 3;
  display: flex;
  align-items: center;
  justify-content: center;
  //   height: 60px;
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
export const ContactDecoration = styled.div`
  position: relative;
  order: 2;
  width: 475px;
  height: 475px;
  background-color: gray;

  a {
    border-radius: 8px;
    filter: drop-shadow(0px 0px 50px rgba(0, 0, 0, 0.5));
  }
`
export const ContactInfo = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.55;

  color: rgba(0, 0, 0, 0.5);
`
