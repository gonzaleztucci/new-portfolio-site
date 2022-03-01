import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* border: 2px solid black; */
  gap: 5px;
  
`
const LogoContainer = styled.div`
    width: 1.6rem;
    height: 1.6rem;
    min-width: 1.6rem;
    min-height: 1.6rem;
    background-color: #f4d644;
    border-radius: 1px;
    padding: auto;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Logo = styled.p`
    margin: 0;
    padding: 0;
    color: #292d2d;
    font-size: 1.2rem;
`

const Tile = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.2rem;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  }
`

const Title = styled.p`
  color: white;
  font-weight: 600;
  font-size: 0.6rem ;
  padding: 0;
  margin: 0;
`
const Info = styled.p`
  color:#a6a6a6;
  font-size: 0.6rem ;
  margin: 0;
  padding: 0;
`

const Contact = () => {
  return (
    <ContactContainer>
        <Tile>
          <LogoContainer><Logo><FontAwesomeIcon icon={faPhone} /></Logo></LogoContainer>
          <Text>
            <Title>Phone</Title>
            <Info>+ 34 653 70 26 57</Info>
          </Text>
        </Tile>
        <Tile>
          <LogoContainer><Logo><FontAwesomeIcon icon={faEnvelope} /></Logo></LogoContainer>
          <Text>
            <Title>Email</Title>
            <Info>gonzaleztucci@gmail.com</Info>
          </Text>
        </Tile>
        <Tile>
          <LogoContainer><Logo><FontAwesomeIcon icon={faGithub} /></Logo></LogoContainer>
          <Text>
            <Title>Github</Title>
            <Info>https://github.com/gonzaleztucci</Info>
          </Text>
        </Tile>

    </ContactContainer>
  )
}

export default Contact