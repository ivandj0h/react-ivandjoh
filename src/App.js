import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import {
  UserComponent,
  ItenaryComponent,
  ListComponent,
} from './component';

function App() {

  return (
    <>
      <Container className="mx-auto my-4">
        <Row>
          <Col>
            <UserComponent />
            <ItenaryComponent />
            <ListComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default App;
