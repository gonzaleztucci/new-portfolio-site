import React from 'react';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
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
  grid-template-rows: 120px auto 25px;
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
const Nav = styled.nav`
  grid-area: nav;
  min-width: 200px;
  background-color: blue;
  `

const Head = styled.header`
  display: flex;
  max-height: 190px;
  align-items: center;
  padding: 0;
  grid-area: header;
  z-index: 20;
  box-shadow: 1px 1px 3px 0px rgba(115,105,102,0.75);
`

const Main = styled.div`
  grid-area: main;
  /* height: 100%; */
  background-color: white;
`
const Foot = styled.footer`
  grid-area: footer;
  background-color: blueviolet;
`


function App() {



  return (

      <Router>       
        <Container className="App">
          <Nav><Navbar/></Nav>
          <Head><Header/></Head>
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
          <Foot><Footer/></Foot>
      </Container>
      </Router>    
  );
}

export default App;
