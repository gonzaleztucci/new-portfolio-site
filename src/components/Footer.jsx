import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


const Text = styled.p`
  font-size: 0.7rem;
  margin: 0;
  letter-spacing: 1px;
`

const Footer = () => {
  return (
    <>
      <Text>Made with  <FontAwesomeIcon icon={faHeart} style={{color:"#9e0404", fontSize: "0.8rem"}} />   in València</Text>            
    </>
  )
}

export default Footer