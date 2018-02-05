import React from 'react';
import styled from 'styled-components';
import Form from '../components/ContactForm';


const ContainerDiv = styled.div`
  background-color: lightgray;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContactPage = () => (
  <ContainerDiv>
    <p>Contact Me</p>
    <Form />
  </ContainerDiv>
)

export default ContactPage
