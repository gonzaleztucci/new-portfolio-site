import React from 'react'
import styled from 'styled-components';


// FONT FAMILY
// font-family: 'Poppins', sans-serif;

const Title = styled.h1`
    font-size: 10em;
    text-align: center;
`
const SideBar = styled.div`
    background-color: #292d2d;
    width: 15%;
    height: 100%;
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
          
        </SideBar>




  )
}

export default Navbar