import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCoffee, faMobile, faAmbulance, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



const LogoContainer = styled.div`
    width: 1.8rem;
    height: 1.8rem;
    background-color: #f4d644;
    border-radius: 2px;
    padding: 0;
    margin: 20px;
`

const Logo = styled.p`
    margin: 0;
    padding: 0;
    color: #292d2d;
    font-size: 1.1rem;
`

const Tile = styled.div``

const Contact = () => {
  return (
    <div>

        <LogoContainer><Logo><FontAwesomeIcon icon={faPhone} /></Logo></LogoContainer>
        <LogoContainer><Logo><FontAwesomeIcon icon={faEnvelope} /></Logo></LogoContainer>
        <LogoContainer><Logo><FontAwesomeIcon icon={faGithub} /></Logo></LogoContainer>

    </div>
  )
}

export default Contact