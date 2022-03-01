import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faBootstrap, faJava, faGitAlt, faGithubSquare, faReact, faNode } from '@fortawesome/free-brands-svg-icons';

const Subtitle = styled.h3 `
    
`
const Container = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    
`
const Text = styled.p`
    
`

const Logos = styled.div`
display: flex;
width: 75%;
margin-left: auto;
margin-right: auto;
justify-content: space-around;
font-size: 3.5rem;   
`
const Skills = () => {
  return (
      <Container>
        <Subtitle>Tech Skills:</Subtitle>
        <br />
        <Text>On top of what I learned during my Systems Engineering degree, 
        where I had the opportunity to work mostly with Java, C++ and Visual Studio.NET, 
        I’ve spent the past months (many months) working full time to get up to speed with
         the latest tendencies on Web Development. For this I enrolled in CodeCademy´s Full 
         Stack Engineer career path where I´ve had the chance to learn modern JavaScript 
         (ES6 / ECMA-262), React, Node.js, Express, PostgreSQL and much, much more… 
         You can check the full curriculum here. I´d really recommend CodeCademy for anyone 
         looking for a place to learn how to code.</Text>
         <br />
         <Logos>
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faBootstrap} />
            <FontAwesomeIcon icon={faJava} />
            <FontAwesomeIcon icon={faGitAlt} />
            <FontAwesomeIcon icon={faGithubSquare} />
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faNode} />          
         </Logos>


      </Container>
    
    
  )
}

export default Skills