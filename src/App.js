import React, { useState } from 'react';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import { SiteContextProvider } from './context/SiteContext';
import Projects from './components/Projects';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Header from './components/Header';
import styled from 'styled-components';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ContactsPage from './components/ContactsPage';



const Container = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 5fr;
  grid-template-rows: 120px auto auto;
  grid-template-areas: 
    "nav    header"
    "nav    main"
    "nav footer";
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 680px){
    grid-template-columns: 1fr;
    grid-template-rows: 120px 260px auto 25px;
    grid-template-areas: 
      "header"
      "nav"
      "main"
      "footer"
    ;
  }
  @media (max-width: 360px){
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto 25px;
    grid-template-areas: 
      "header"
      "nav"
      "main"
      "footer"
    ;
  }

`
const NavContainer = styled.nav`
  grid-area: nav;
  min-width: 200px;
  display: grid;
  grid-template-rows: auto 200px 200px 1fr;
  grid-template-areas:
  "pic"
  "nav"
  "contact"
  "whitespace" ;
  background-color: #292d2d;
  height: 100%;
    @media (max-width: 680px){
      align-items: center;
      padding: 2rem;
      grid-template-rows: auto 200px;
      grid-template-areas:
      "pic"
      "nav" ;
    }
  `

const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  background-color: #f4d644;
  width: 100%;
  max-height: 190px;
  align-items: center;
  padding: 1.5rem;
  grid-area: header;
  z-index: 20;
  box-shadow: 1px 1px 3px 0px rgba(115,105,102,0.75);
  @media (min-width: 680px) {
    transform: ${props => props.active ? 'translateY(0%)' : 'translateY(-100%)'};
    transition: all 0.3s ease-out;
  }
`

const Main = styled.div`
  grid-area: main;
  background-color: white;
`
const FooterContainer = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: baseline;
  height: 100%;
  background-color: #f4d644;
  padding: 3px; 
`


function App() {
  const [headerVisibility, setHeaderVisibility] = useState(true);

  
  const toggleHeader = () => {
    console.log(window.scrollY);
    if(window.scrollY >= 120){
      setHeaderVisibility(false);  
    } else {
      setHeaderVisibility(true);
    }
  };

  window.addEventListener('scroll', toggleHeader);



  return (
    <SiteContextProvider>
      <Router>       
        <Container className="App">
          <NavContainer><Navbar/></NavContainer>
          <HeaderContainer active = {headerVisibility}><Header/></HeaderContainer>
          <Main>
            <Banner />
            <Routes>
              <Route exact path="/" element = {<AboutMe/>} />
              <Route exact path="/about-me" element = {<AboutMe/>} />
              <Route exact path="/projects" element = {<Projects/>} />
              <Route exact path= "/skills" element = {<Skills/>} />
              <Route exact path= "/contact" element = {<ContactsPage/>} />
            </Routes>
          </Main>
          <FooterContainer><Footer/></FooterContainer>
      </Container>
    </Router>    
  </SiteContextProvider>


  );
}

export default App;
