import React, { useState } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import './ChecklistComponent.css'; // Optional custom CSS

const categories = [
  'Action', 'Adventure', 'RPG', 'Racing', 'Strategy', 'Simulation',
  'Puzzle', 'Horror', 'Sports', 'Shooter', 'Open World', 'Sandbox',
  'Casual', 'Platformer', 'Indie', 'MMORPG', 'MOBA', 'Fighting',
  'Stealth', 'Survival'
];

const ChecklistComponent = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <Container className="checklist-container mb-3">
      <h4 className="text-center mb-3">CATEGORIES</h4>
      <div className="scrollable-section">
        <Row>
          {categories.map((category, index) => (
            <Col key={index} xs={6} className="mb-2">
              <Form.Check
                type="checkbox"
                label={category}
                id={`category-${index}`}
                className="custom-checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ChecklistComponent;
