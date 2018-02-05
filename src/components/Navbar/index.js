import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Navstrip = styled.div`
  background-color: black;
  margin-bottom: 1.45rem;
`

const NavContent = styled.div`
  margin: 0px auto;
  ${'' /* max-width: 960px; */}
  padding: 1.45rem 1.0875rem;
  background-color: darkblue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

const NavButtons = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`

const Navbar = () => (
      <Navstrip>
        <NavContent>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{color: 'white', textDecoration: 'none'}}
            >
              Paper Chambers
            </Link>
          </h1>
          <NavButtons>
            <Link
              exact
              to="/"
              style={{color: 'gray', textDecoration: 'none', marginRight: '40px'}}
              activeStyle={{color: 'white'}}
            >
              Home
            </Link>
            <Link
              to="/page-2"
              style={{color: 'gray', textDecoration: 'none'}}
              activeStyle={{color: 'white'}}
            >
              Contact
            </Link>
          </NavButtons>

        </NavContent>
      </Navstrip>
    )




export default Navbar
