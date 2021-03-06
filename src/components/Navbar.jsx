import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Contact from './Contact';


// FONT FAMILY
// font-family: 'Poppins', sans-serif;



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
    @media (max-width: 680px){
      margin: 2rem auto;
    }
    

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

const ContactsItem = styled.li`
    font-size: 1.2rem ;
    font-family:'Poppins', sans-serif;
    font-weight: 600;
    color: #a6a6a6;
    text-align: left;
    padding-left: 1rem;
    width: 100%;
    transition: all 0.3s;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 2rem;

    &:hover {
        color: white;
        cursor: pointer;
    }

    @media (min-width: 680px){
      display: none;
    }

`
const Contacts = styled.div`
  grid-area: contact;
  justify-content: flex-start;
  @media (max-width: 680px){
    display: none;
    }
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

        <>
          <ProfilePic src={require('../images/linkedin-profile-min.jpg')} alt='Luis Gonzalez Tucci'/> 
          <Nav>
            <Item onClick={handleClick}>About Me</Item>
            <Item onClick={handleClick}>Projects</Item>
            <Item onClick={handleClick}>Skills</Item>
            <ContactsItem onClick={handleClick}>Contact</ContactsItem>
          </Nav>
          <Contacts><Contact/></Contacts>
          
        </>

  )
}

export default Navbar