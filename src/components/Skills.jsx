import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faBootstrap, faJava, faGitAlt, faGithubSquare, faReact,faNode, faVuejs } from '@fortawesome/free-brands-svg-icons';

const Subtitle = styled.h3 `
    color: #292d2d;    
`
const Container = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    
`
const Text = styled.p`
    color: #595a5a;
    
`

const List = styled.ul`
color: #595a5a;
    
`

const ListItem = styled.li`
    
`



const Logos = styled.div`
display: flex;
flex-wrap: wrap;
width: 70%;
margin-left: auto;
margin-right: auto;
justify-content: space-around;
font-size: 3.5rem;   
`
const Icon = styled.text`
    margin: 1rem;
    color: #292d2d;   
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
            <Icon><FontAwesomeIcon icon={faHtml5} /></Icon>
            <Icon><FontAwesomeIcon icon={faCss3} /></Icon>
            <Icon><FontAwesomeIcon icon={faJs} /></Icon>
            <Icon><FontAwesomeIcon icon={faBootstrap} /></Icon>
            <Icon><FontAwesomeIcon icon={faJava} /></Icon>
            <Icon><FontAwesomeIcon icon={faGitAlt} /></Icon>
            <Icon><FontAwesomeIcon icon={faGithubSquare} /></Icon>
            <Icon><FontAwesomeIcon icon={faReact} /></Icon>
            <Icon><FontAwesomeIcon icon={faVuejs} /></Icon>
            <Icon><FontAwesomeIcon icon={faNode} /> </Icon>         
         </Logos>
         <br />
         <Subtitle>Soft Skills:</Subtitle>
         <br />
         <Text>One of the most important things I learned during my days as a Systems Engineering
          student was to acquire new skills on my own and to solve problems. 
          During these past months I’ve proven to myself that I'm still able to do so.</Text>
          <br />
          <Text>Later on I was also lucky enough to work on vehicle launches for Ford Motor Company where
           I had a great boss who mentored me on how to work in a global, multicultural, 
           very fast paced, stressful environment and, not only survive, but to succeed on my 
           personal and the organization’s objectives and still enjoy it.</Text>
           <br />
           <List>
               <ListItem>Problem solving</ListItem>
               <ListItem>Teamwork</ListItem>
               <ListItem>Communication</ListItem>
               <ListItem>Adaptability</ListItem>
               <ListItem>Negotiation</ListItem>
           </List>
           <br />
           <Subtitle>Language Skills:</Subtitle>
           <br />
           <Text>Mother tongue: Spanish</Text>
           <br />
           <Text>English:</Text>
           <List>
               <ListItem>Reading: C2</ListItem>
               <ListItem>Writing: C1</ListItem>
               <ListItem>Spoken Interaction: C1</ListItem>
           </List>
           <br />
           <Text>Levels: A1/2: Basic User - B1/2: Independent User - C1/2: Proficient User
            </Text>
            <a href='https://www.coe.int/en/web/common-european-framework-reference-languages'>Common European Framework of Reference for Languages</a>
            <br />





      </Container>
    
    
  )
}

export default Skills