import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Library from '../components/Library';
import PromotionalSlider from '../components/PromotionalSlider';
import NewsSection from '../components/NewsSection';
import './Home.css'; // Custom styling with the gradient background

const Home = () => {
  return (
    <Container fluid className="home-container gradient-background"> {/* Add gradient class here */}
      <Row>
        {/* First Column: Game Library */}
        <Col xs={12} md={5} lg={5} className="library-column">
          <Library />
        </Col>

        {/* Second Column: Promo Slider (60%) and News Section (40%) */}
        <Col xs={12} md={7} lg={7} className="content-column px-4">
          {/* Row 1: Promotional Slider (60% height) */}
          <Row className="promo-slider-row" style={{ height: '60%' }}>
            <Col xs={12}>
              <PromotionalSlider />
            </Col>
          </Row>

          {/* Row 2: News Section (40% height) */}
          <Row className="news-section-row" style={{ height: '40%' }}>
            <Col xs={12}>
              <NewsSection />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
