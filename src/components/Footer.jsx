import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Bottom = styled.footer`
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 100%;
  background-color: #f4d644;
`

const Text = styled.p`
  font-size: 0.7rem;
`

const Footer = () => {
  return (
    <Bottom>
      <Text>Made with <FontAwesomeIcon icon={faHeart} /> in València</Text>            
    </Bottom>
  )
}

export default Footer