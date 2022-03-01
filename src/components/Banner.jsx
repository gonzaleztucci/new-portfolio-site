import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';


const Title = styled.h2`
    padding: 2rem;
    text-align: center;
    font-weight: 600;
    
`

const Banner = () => {
    const location = useLocation();
    console.log(location.pathname);

    let text;

    switch (location.pathname){
        case '/':
            text = 'Home';
            break;
        case '/about-me':
            text = 'About Me';
            break;
        case '/projects':
            text = 'Projects';
            break;
        case '/skills':
            text = 'Skills';
            break;
        default:
            text = '';
    }
  return (
      <Title>{text}</Title>
  )
}

export default Banner