import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { SiteContext } from '../context/SiteContext';
import styled from 'styled-components';
import Contact from '../Contact';


// FONT FAMILY
// font-family: 'Poppins', sans-serif;

const Title = styled.h1`
    font-size: 10em;
    text-align: center;
`
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
      /* justify-content: flex-start; */
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
    }

    @media (max-width: 680px){
      text-transform: uppercase;
      font-size: 2rem;
      margin: 0.5rem;
    }

`
const Contacts = styled.div`
  grid-area: contact;
  justify-content: flex-start;
`

const Navbar = () => {
  let navigate = useNavigate();
  const {page, setPage} = useContext(SiteContext);

  const handleClick = (e) => {
    e.preventDefault();
    const text = e.target.innerText;
  
    
    switch (text){
      case 'About Me':
        navigate('/about-me');
        break;
      case 'Projects':
        navigate('/projects');
        break;
      case 'Skills':
        navigate('/skills');
        break; 
      case 'Contact':
        navigate('/contact');
        break;  
      default:
      console.log('nothing');
    }

    setPage(text);
    
  }

  return (

        <SideBar>
          <ProfilePic src={require('../images/linkedin-profile-min.jpg')} alt='Luis Gonzalez Tucci'/> 
          <Nav>
            <Item onClick={handleClick}>About Me</Item>
            <Item onClick={handleClick}>Projects</Item>
            <Item>Skills</Item>
          </Nav>
          <Contacts><Contact/></Contacts>
          
        </SideBar>




  )
}

export default Navbar