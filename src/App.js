import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import {
  UserComponent,
  ItenaryComponent,
  ListComponent,
  CardComponent,
  StatesComponent
} from './component';

function App() {

  const data = {
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }

  return (
    <>
      <Container className="mx-auto my-4">
        <Row>
          <Col>
            <UserComponent />
            <ItenaryComponent />
            <ListComponent />
            <CardComponent {...data} />
            <StatesComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default App;
