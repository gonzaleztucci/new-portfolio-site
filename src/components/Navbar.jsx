import React from 'react'
import styled from 'styled-components';
import Contact from '../Contact';


// FONT FAMILY
// font-family: 'Poppins', sans-serif;

const Title = styled.h1`
    font-size: 10em;
    text-align: center;
`
const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #292d2d;
    width: 15%;
    min-width: 200px;
    height: 100%;
    /* overflow: hidden; */
`
const ProfilePic = styled.img`
    width: 100%
`

const Nav = styled.nav`
    list-style-type: none;
    margin-top: 2.3rem;
`
const Item = styled.li`
    font-size: 1.2rem ;
    font-family:'Poppins', sans-serif;
    font-weight: 600;
    color: #a6a6a6;
    text-align: left;
    padding-left: 1rem;
    width: 100%;
    transition: all 0.3s;

    &:hover {
        color: white;
    }
`


const Navbar = () => {
  return (

        <SideBar>
          <ProfilePic src={require('../images/linkedin-profile-min.jpg')} alt='Luis Gonzalez Tucci'/>
          <Nav>
            <Item>About Me</Item>
            <Item>Projects</Item>
            <Item>Skills</Item>
            <Item>Contact</Item>
          </Nav>
          <Contact/>
          
        </SideBar>




  )
}

export default Navbar