import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
 
  <div className="text-center">
   <h1 className="shadow display-6 text-bg-primary text-dark">Hello world</h1>
   <p className=" lead text-muted text-center text-lowercase fs-4 fst-italic text-decoration-underline "> first of all thank u for giving this oppotunity </p>
    <Image src={require("./assets/react-image.jpeg")} fluid thumbnail></Image>
    <p style={{height:100}} className=' p-3 mt-2 me-4 ms-4 m-auto text-bg-light border border-3 border-success border rounded-pill  '>Dhileep</p>
    <div className='vstack mt-2 gap-1 align-itmes-center'>
      <p className='text-bg-dark'>vstack</p>
      <p className='text-bg-dark'>vstack</p>
      <p className='text-bg-dark'>vstack</p>
    </div>
    <div className='hstack gap-4  justify-content-center'>
      <p className='text-bg-dark'>vstack</p>
      <p className='text-bg-dark'>vstack</p>
      <p className='text-bg-dark'>vstack</p>
    </div>
    <Container fluid>
      <Row>
        <Col className="text-bg-primary">grid</Col>
        <Col className='text-bg-success'>grid 2</Col>
      </Row>
      <Row>
        <Col className="text-bg-warning">grid</Col>
        <Col className='text-bg-success'>grid 2</Col>
      </Row>
      <Row>
        <Col className="text-bg-primary">grid</Col>
        <Col className='text-bg-success'>grid 2</Col>
      </Row>
    </Container>
  
  
  
   </div>
   
  );
}

export default App;
