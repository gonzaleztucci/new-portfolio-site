import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Bottom = styled.footer`
  display: flex;
  justify-content: center;
  align-items: baseline;
  height: 100%;
  background-color: #f4d644;
  padding: 3px; 

`

const Text = styled.p`
  font-size: 0.7rem;
  margin: 0;
  letter-spacing: 1px;
`

const Footer = () => {
  return (
    <Bottom>
      <Text>Made with  <FontAwesomeIcon icon={faHeart} style={{color:"#9e0404", fontSize: "0.8rem"}} />   in València</Text>            
    </Bottom>
  )
}

export default Footer