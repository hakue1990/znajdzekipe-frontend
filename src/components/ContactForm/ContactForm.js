import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_38ye0dj",
        "template_0qinh5x",
        form.current,
        "JYFZJAGUVzxfHD-Im"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <TextBox>
        <Input type="text" name="user_name" autoComplete="off" required />
        <Label>
          <ContentText>Name</ContentText>
        </Label>
      </TextBox>

      {/* <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" /> */}
      <input type="submit" value="Send" />
    </Form>
  );
};
export default ContactForm;

const Form = styled.form`
  width: 430px;
  background-color: white;;
  height: 530px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  margin: 30px;
`;

const TextBox = styled.div`
  width: 80%;
  height: 30px;
  background-color: #333;
  position: relative;
  margin: 20px;
  overflow-x: hidden;
`;
const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  outline: none;
  padding-top: 20px;
  border: none;
`;

const Label = styled.label`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 3px solid #FF7F11;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 100%;
    border-bottom: 3px solid #FF7F11;
    transform: translate(-100%);
  }
`;

const ContentText = styled.span`
    color: black;
    position: absolute;
    bottom: 5px;
    left: 0px;
    transition: all .3s ease;

`