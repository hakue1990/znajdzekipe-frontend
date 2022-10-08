import React from "react";

// import styled, { css } from "styled-components";
// import ContactImg from "../../assets/images/ContactImg.webp";
// import Button from '../../components/Button/Button'

import ContactForm from "../../components/ContactForm/ContactForm";

const ContactSection = () => (
  <>
    <div>
      {/* <Row column>
        <h1>
          napisz do <span style={{ color: "#f6ae2d" }}>nas</span>!
        </h1>
        <Form>
          <InputContainer>
            <Input type="text" id="dupa" required autoComplete="off" />
            <Label htmlFor="dupa">
              <Content>imie:</Content>
            </Label>
            <Line />
          </InputContainer>
          <InputContainer>
            <Input type="text" id="dupa" required autoComplete="off" />
            <Label htmlFor="dupa">
              <Content>email:</Content>
            </Label>
            <Line />
          </InputContainer>
          <InputContainer>
            <Input type="text" id="dupa" required autoComplete="off" />
            <Label htmlFor="dupa">
              <Content>temat:</Content>
            </Label>
            <Line />
          </InputContainer>
          <TextWrapper>
            <Input type="text" id="dupa" required autoComplete="off" />
            <Label htmlFor="dupa">
              <TextAreaContent>wiadomość:</TextAreaContent>
            </Label>
            <Line />
          </TextWrapper>
          <Button>wyślij</Button>
        </Form>
      </Row>
      <Row>
        <img src={ContactImg} alt="Contact" />
      </Row> */}
      <ContactForm/>
    </div>
  </>
);

export default ContactSection;

// const Container = styled.div`
//   min-height: 92vh;
//   background-color: black;
//   color: white;
//   display: flex;
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }

//   ${(props) =>
//     props.primary &&
//     css`
//       background: white;
//       color: black;
//     `}
// `;

// const Row = styled.div`
//   width: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 768px) {
//     width: 100%;
//     padding-top: 52px;
//     overflow: hidden;

//     img {
//       width: 350px;
//     }
//   }

//   ${(props) =>
//     props.column &&
//     css`
//       flex-direction: column;
//       align-items: center;
//     `}
// `;

// const Form = styled.form`
//   width: 500px;
//   height: 540px;
//   background-color: #fff;
//   margin-top: 30px;
//   display: flex;
//   flex-direction: column;
//   padding-top: 50px;
//   position: relative;
//   align-items: center;
// `;

// const InputContainer = styled.div`
//   width: 60%;
//   height: 50px;
//   background-color: blue;
//   position: relative;
//   overflow: hidden;
//   margin: 7px;
// `;

// const Content = styled.span`
//   position: absolute;
//   bottom: 5px;
//   left: 0;
//   transition: all 0.3s ease;
// `;

// const Label = styled.label`
//   position: absolute;
//   width: 300px;

//   max-width: 300px;
//   height: 100%;
//   pointer-events: none;
//   border-bottom: 3px solid black;
//   color: black;
//   font-size: 20px;
// `;

// const Line = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   left: 0;
//   transform: translateX(-100%);
//   border-bottom: 3px solid #5603ad;
//   transition: all 0.5s ease;
// `;
// const TextAreaContent = styled(Content)`
// `
// const Input = styled.input`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   outline: none;
//   border: none;
//   font-size: 20px;
//   overflow: hidden;
//   &:focus + ${Label} ${Content} {
//     transform: translateY(-20px);
//     color: #5603ad;
//     font-size: 13px;
//   }
//   &:valid + ${Label} ${Content} {
//     transform: translateY(-20px);
//     font-size: 13px;
//     color: #5603ad;
//   }
//   &:focus + ${Label} ${TextAreaContent} {
//     transform: translateY(-100px);
//     color: #5603ad;
//     font-size: 13px;
//   }
//   &:valid + ${Label} ${TextAreaContent} {
//     transform: translateY(-100px);
//     font-size: 13px;
//     color: #5603ad;
//   }
//   &:focus ~ ${Line} {
//     transform: translateX(0);
//   }
// `;

// const TextWrapper = styled(InputContainer)`
// height: 170px;
// margin-bottom: 30px;
// `;
