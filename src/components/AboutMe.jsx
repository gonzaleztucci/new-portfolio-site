import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  padding: 3rem;
`

const Bio = styled.div`
  
`

const Image = styled.img`
  width: 50%;

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
                    I've trained myself mostly with <a href="https://www.codecademy.com/learn/paths/full-stack-engineer-career-path" target="_blank">Codecademy's Full-Stack Software Engineer career path</a>,  
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
                    Check out my work on my <a href="https://github.com/gonzaleztucci/" target="_blank">Github profile</a>
                  </p>  
      </Bio>
      <Image></Image>
      
      
      
    </Container>
  )
}

export default AboutMe