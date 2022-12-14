import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Button from '../Button/Button';
import { useState } from 'react';
import BG from './../../assets/images/pytania-odpowiedzi.svg';

import MessageSentPopUp from './MessageSentPopUp/MessageSentPopUp';

const ContactForm = () => {
  const [isOpen, togglePopUp] = useState(false);
  const form = useRef();

  function toggle() {
    togglePopUp((prevOpen) => !prevOpen);
    console.log(isOpen);
  }

  const sendEmail = (e) => {
    e.preventDefault(true);

    emailjs
      .sendForm(
        'service_38ye0dj',
        'template_0qinh5x',
        form.current,
        'JYFZJAGUVzxfHD-Im'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toggle();
    e.target.reset();
  };

  return (
    <>
      {isOpen && <MessageSentPopUp toggle={toggle} />}
      <Container>
        <Form ref={form} onSubmit={sendEmail}>
          <InputContainer>
            <Input type='text' name='user_name' autoComplete='off' required />
            <Label>
              <Content>imie:</Content>
            </Label>
            <Line />
          </InputContainer>
          <InputContainer>
            <Input type='text' name='user_title' autoComplete='off' required />
            <Label>
              <Content>tytuł:</Content>
            </Label>
            <Line />
          </InputContainer>
          <InputContainer>
            <Input type='email' name='user_email' autoComplete='on' required />
            <Label>
              <Content>email</Content>
            </Label>
            <Line />
          </InputContainer>
          <TextWrapper>
            <Input
              type='text'
              name='message'
              id='message'
              required
              autoComplete='off'
            />
            <Label htmlFor='message'>
              <TextAreaContent>wiadomość:</TextAreaContent>
            </Label>
            <Line />
          </TextWrapper>

          <Button>Wyślij </Button>
        </Form>
        <ImageDiv></ImageDiv>
      </Container>
    </>
  );
};
export default ContactForm;

const Container = styled.div`
  width: 940px;
  position: relative;
  margin: 20px;
  display: flex;
  border: 1px solid black;
  @media (max-width: 768px) {
    width: 100vw;
    flex-direction: column;
  }
`;

const Form = styled.form`
  width: 45%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  left: 0;
  top: 0;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const ImageDiv = styled.div`
  background: url(${BG});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  width: 55%;
  height: 100%;
  background-color: white;
`;

const InputContainer = styled.div`
  width: 60%;
  height: 50px;
  position: relative;
  overflow: hidden;
  margin: 7px;
`;

const Content = styled.span`
  position: absolute;
  bottom: 5px;
  left: 0;
  transition: all 0.3s ease;
`;

const Label = styled.label`
  position: absolute;
  width: 300px;

  max-width: 300px;
  height: 100%;
  pointer-events: none;
  border-bottom: 3px solid black;
  color: black;
  font-size: 20px;
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  transform: translateX(-100%);
  border-bottom: 3px solid #5603ad;
  transition: all 0.5s ease;
`;
const TextAreaContent = styled(Content)``;
const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 20px;
  overflow: hidden;
  &:focus + ${Label} ${Content} {
    transform: translateY(-20px);
    color: #5603ad;
    font-size: 13px;
  }
  &:valid + ${Label} ${Content} {
    transform: translateY(-20px);
    font-size: 13px;
    color: #5603ad;
  }
  &:focus + ${Label} ${TextAreaContent} {
    transform: translateY(-100px);
    color: #5603ad;
    font-size: 13px;
  }
  &:valid + ${Label} ${TextAreaContent} {
    transform: translateY(-100px);
    font-size: 13px;
    color: #5603ad;
  }
  &:focus ~ ${Line} {
    transform: translateX(0);
  }
`;

const TextWrapper = styled(InputContainer)`
  height: 170px;
  margin-bottom: 30px;
`;
