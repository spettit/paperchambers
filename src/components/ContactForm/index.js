import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 60vw;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ContactForm = () => (
  <Form>
    <input name="name" type="text" placeholder="Your Name" />
    <input name="email" type="email" placeholder="Your email address" />
    <textarea placeholder="Your Message" style={{height: '200px'}}/>
    <button type="submit" style={{backgroundColor: 'darkgreen', color: 'white'}}>Send</button>
  </Form>
)

export default ContactForm;
