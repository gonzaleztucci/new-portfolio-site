import React, {useContext, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { SiteContext } from '../context/SiteContext';


const Title = styled.h2`
    color: #292d2d;
    padding: 2rem;
    text-align: center;
    font-weight: 600;
    
`

const Banner = () => {
    const location = useLocation();
    const {setLocation} = useContext(SiteContext);
    console.log(location.pathname);

    useEffect(() => {
        updateLocation(location);
        
    }, [location])

    const updateLocation = (currentLocation) => {
        setLocation(currentLocation);
    }

    let text;

    switch (location.pathname){
        case '/':
            text = 'About Me';
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
        case '/contact':
            text = 'Contact Info';
            break;
        default:
            text = '';
    }
  return (
      <Title>{text}</Title>
  )
}

export default Banner