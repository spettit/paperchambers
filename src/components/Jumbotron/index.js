import React from 'react';
import styled from 'styled-components';
import paper from '../../images/paper.jpg';

const Jumbo = styled.div`
  height: 30vw;
  background-color: black;
  position: relative;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .7;
`

const Text = styled.h1`
  font-size: 40px;
  font-weight: lighter;
  width: 100%;
  text-align: center;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`


const Jumbotron = () => (
  <Jumbo>
    <Img src={paper} />
    <Text>Chambers of Sean Pettit</Text>
  </Jumbo>
)

export default Jumbotron;
