import React from 'react';
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';

const HelperControls = () => {
  return (
    <Container fluid className="helper-controls-container">
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <ButtonGroup className="d-flex w-100">
            <Button variant="primary" size="lg" className="mx-2 flex-fill">
              Price Low to High
            </Button>
            <Button variant="success" size="lg" className="mx-2 flex-fill">
              Release Date
            </Button>
            <Button variant="warning" size="lg" className="mx-2 flex-fill">
              Top Seller
            </Button>
            <Button variant="danger" size="lg" className="mx-2 flex-fill">
              By Rating
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default HelperControls;
