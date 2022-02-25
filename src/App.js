import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Header from './components/Header';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`

function App() {
  return (
    <Container className="App">
      <Navbar/>
      <Header/>
    </Container>
  );
}

export default App;
