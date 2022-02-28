import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Header from './components/Header';
import styled from 'styled-components';
import Footer from './components/Footer';

const Container = styled.div`
  display: grid;
  background-color: red;
  grid-template-columns: 0.7fr 5fr;
  grid-template-rows: 100px auto 25px;
  grid-template-areas: 
    "nav    header"
    "nav    main"
    "footer footer";
  height: 100vh;
  font-family: 'Poppins', sans-serif;
`
const Nav = styled.nav`
  grid-area: nav;
  min-width: 200px;
  `

const Head = styled.header`
  grid-area: header;
  height: 100px;
`

const Main = styled.div`
  grid-area: main;
  background-color: aliceblue;
`

const Foot = styled.footer`
  grid-area: footer;
  background-color: blueviolet;
`


function App() {
  return (
    <Container className="App">
      <Nav><Navbar/></Nav>
      <Head><Header/></Head>
      <Main>MAIN</Main>
      <Foot><Footer/></Foot>

    </Container>
  );
}

export default App;
