import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import paper from '../../images/paper.jpg';

const Jumbo = styled.div`
  height: 400px;
  ${'' /* border-radius: 10px; */}
  background-color: rebeccapurple;
  position: relative;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .7;
`

const Text = styled.h1`
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
