import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ItenaryComponent from './component/ItenaryComponent';
import UserComponent from './component/UserComponent';

function App() {

  return (
    <>
      <Container className="mx-auto my-4">
        <Row>
          <Col>
            <UserComponent />
            <ItenaryComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default App;
