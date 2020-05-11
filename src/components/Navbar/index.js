import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import FaCameraRetro from 'react-icons/lib/fa/camera-retro';

const Navstrip = styled.div`
  margin-bottom: 1.45rem;
`

const NavContent = styled.div`
  margin: 0px auto;
  padding: 1.45rem 1.0875rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

const NavButtons = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`

const Navbar = () => (
      <Navstrip>
        <NavContent>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{color: 'black', textDecoration: 'none', fontFamily: 'Courier'}}
            >
              Paper Buildings
            </Link>
          </h1>
          <NavButtons>


            <Link
              exact
              to="/"
              style={{color: 'gray', textDecoration: 'none', marginRight: '40px'}}
              activeStyle={{color: 'black'}}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{color: 'gray', textDecoration: 'none', marginRight: '40px'}}
              activeStyle={{color: 'black'}}
            >
              About
            </Link>
            <Link
              to="/articles"
              style={{color: 'gray', textDecoration: 'none', marginRight: '40px'}}
              activeStyle={{color: 'black'}}
            >
              Articles
            </Link>
            <Link
              to="/contact"
              style={{color: 'gray', textDecoration: 'none'}}
              activeStyle={{color: 'black'}}
            >
              Contact
            </Link>

          </NavButtons>

        </NavContent>
      </Navstrip>
    )




export default Navbar
