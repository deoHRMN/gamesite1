import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HelperControls from '../components/HelperControls';
import GameCardList from '../components/GameCardList';
import Searchbar from '../components/Searchbar';
import ChecklistComponent from '../components/ChecklistComponent';
import './Store.css';

const Store = () => {
  return (
    <Container fluid className="store-container">
      <Row className="equal-height-row">
        {/* Left Column */}
        <Col xs={12} md={7} className="store-left-column d-flex flex-column">
          {/* Helper Controls */}
          <Row className="mb-3">
            <Col>
              <HelperControls />
            </Col>
          </Row>

          {/* Product List (GameCardList) with overflow scroll */}
          <Row className="flex-grow-1 products-list-scroll">
            <Col>
              <GameCardList />
            </Col>
          </Row>
        </Col>

        {/* Right Column */}
        <Col xs={12} md={5} className="store-right-column d-flex flex-column">
          {/* Search Bar */}
          <Row className="mb-3">
            <Col>
              <Searchbar placeholder="Search Games..." />
            </Col>
          </Row>

          {/* Categories Checklist with overflow scroll */}
          <Row className="flex-grow-1 categories-scroll">
            <Col>
              <ChecklistComponent />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Store;
