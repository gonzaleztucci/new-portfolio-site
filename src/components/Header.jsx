import styled from 'styled-components'


const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    width: 100% ;
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
    width: 100%;
    color: #292d2d;
    font-size: 1rem;
    text-transform: uppercase;
    margin: 0rem;
    font-weight: 600;
    padding-top: 0;
`
const Header = () => {  
  return (
    <>
        <Title>Luis Gonzalez Tucci</Title>
        <Subtitle>Full Stack Web Developer</Subtitle>
    </>
  )
}

export default Header