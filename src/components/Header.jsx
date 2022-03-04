import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #f4d644;
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
`

const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: #292d2d;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.1em;
    margin: 0rem;
    padding: 0;
`
const Subtitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    color: #292d2d;
    font-size: 1rem;
    text-transform: uppercase;
    margin: 0rem;
    font-weight: 600;
    padding-top: 0;
`
const Header = () => {
  




  return (
    <Container>
        <Title>Luis Gonzalez Tucci</Title>
        <Subtitle>Full Stack Web Developer</Subtitle>
    </Container>
  )
}

export default Header