import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function App() {

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Contents name="John" age="25" />
          </Col>
        </Row>
      </Container>
    </>
  );
}


const Contents = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}.</p>
    </div>
  );
}

export default App;
