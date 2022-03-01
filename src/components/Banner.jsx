import React, {useContext} from 'react';
import styled from 'styled-components';
import { SiteContext } from '../context/SiteContext';

const Title = styled.h2`
    padding: 2rem;
    text-align: center;
    
`

const Banner = () => {
    const {page} = useContext(SiteContext);
  return (
    <Title>{page}</Title>
  )
}

export default Banner