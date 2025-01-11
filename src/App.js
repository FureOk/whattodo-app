// import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Whattodo from "./components/Whattodo";
import Header from "./components/Header";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Header/>
      <Whattodo/>
    </Container>
  );
}

export default App;
