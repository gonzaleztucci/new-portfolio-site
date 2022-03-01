import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Contact from './Contact';


// FONT FAMILY
// font-family: 'Poppins', sans-serif;

const SideBar = styled.div`
    display: grid;
    grid-template-rows: auto 200px 200px 1fr;
    grid-template-areas:
    "pic"
    "nav"
    "contact"
    "whitespace" ;

    background-color: #292d2d;
    min-width: 200px;
    height: 100%;
    @media (max-width: 680px){
      align-items: center;
      padding: 2rem;
    }
    
`


const ProfilePic = styled.img`
  width: 100%;
  grid-area: pic;
  @media (max-width: 680px){
      display: none;
    }

`

const Nav = styled.nav`
    list-style-type: none;
    padding: 0;
    margin-top: 2.3rem;
    grid-area: nav;

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
        cursor: pointer;
    }

    @media (max-width: 680px){
      text-transform: uppercase;
      margin: 0;
      padding: 0;
      text-align: center;
      font-size: 2rem;
    }

`
const Contacts = styled.div`
  grid-area: contact;
  justify-content: flex-start;
`

const Navbar = () => {
  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const innerText = e.target.innerText;
    const text = innerText.toLowerCase();
    
    
    // alert(text);
  
    
    switch (text){
      case 'about me':
        navigate('/about-me');
        break;
      case 'projects':
        navigate('/projects');
        break;
      case 'skills':
        navigate('/skills');
        break; 
      case 'contact':
        navigate('/contact');
        break;  
      default:
        navigate('/about-me');
    }    
  }

  return (

        <SideBar>
          <ProfilePic src={require('../images/linkedin-profile-min.jpg')} alt='Luis Gonzalez Tucci'/> 
          <Nav>
            <Item onClick={handleClick}>About Me</Item>
            <Item onClick={handleClick}>Projects</Item>
            <Item onClick={handleClick}>Skills</Item>
          </Nav>
          <Contacts><Contact/></Contacts>
          
        </SideBar>

  )
}

export default Navbar