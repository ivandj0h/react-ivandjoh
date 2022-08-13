import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UserComponent from './component/UserComponent';

function App() {

  return (
    <>
      <Container className="mx-auto my-4">
        <Row>
          <Col>
            <UserComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default App;
