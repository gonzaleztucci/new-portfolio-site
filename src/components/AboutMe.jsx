import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  padding: 3rem;

  @media (max-width: 1100px){
      flex-direction: column-reverse;
      align-items: center;
    }
`

const Bio = styled.div`
  color: #595a5a;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1100px){
      width: 100%;
    }
  
`

const Image = styled.img`
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 35%;
  height: auto;
  margin: 3rem;
  box-shadow: 1px 1px 3px 0px rgba(115,105,102,0.75);

  @media (max-width: 1100px){
      width: 70%;
    }
`

const AboutMe = () => {

  return (  
    <Container>
       <Bio>
        <p>
            I'm a Full Stack Web Developer based in Valencia, Spain.
            After working as a Buyer for Automotive, Tech and Green Energies companies
            for nearly 10 years I gave a spin to my career to start working full time
            as a Full Stack Engineer.
        </p>
          <br/>
        <p>
          I specialize in Node.js and have experience building REST APIs with Express coupled with PostgreSQL.
          For the Front End I work mostly with React and libraries such as Redux and React Bootstrap and styled components.
        </p>
          <br/>
        <p>
          On top of my Systems Engineering degree, in regards of Web Development,
          I've trained myself mostly with <a href="https://www.codecademy.com/learn/paths/full-stack-engineer-career-path" target="_blank" rel="noopener noreferrer">Codecademy's Full-Stack Software Engineer career path</a>,  
            which includes training on important aspects such as:
        </p>
          <br/>
          <ul class="list-group list-group-flush">
            <li className="list-group-item">Testing methodologies including TDD</li>
            <li className="list-group-item">Web Security Fundamentals</li>
            <li className="list-group-item">User Authentication & Authorization</li>
            <li className="list-group-item">Data Security</li>
          </ul>
          <br/>
        <p>
          Check out my work on my <a href="https://github.com/gonzaleztucci/" target="_blank" rel="noopener noreferrer">Github profile</a>
        </p>  
      </Bio>
      <Image src={require('../images/Luis-and-Kawi.jpg')} alt='Luis and Kawi at La Marina'></Image>
      
      
      
    </Container>
  )
}

export default AboutMe