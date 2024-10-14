import React, { useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { games } from './Games';  // Assume games is imported from a data file

const GameCardList = ({ onGameClick }) => {
  // Inline styles
  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '10px',
    backgroundColor: '#212529',
    width: '100%',
    height: '115px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
  };

  const cardImageStyle = {
    width: '85px',
    height: '85px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginRight: '15px',
  };

  const cardDetailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  };

  const cardTitleStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#f5ba42',
    marginBottom: '2px',
  };

  const cardPriceStyle = {
    color: '#4caf50',
    fontSize: '1rem',
    marginBottom: '2px',
  };

  const cardDescriptionStyle = {
    color: '#ddd',
    fontSize: '0.8rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: '5px',
    whiteSpace: 'nowrap',
  };

  const cardInfoStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: '#ccc',
    flexShrink: 0,
  };

  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 4;  // Set how many games per page

  // Pagination logic
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const totalPages = Math.ceil(games.length / gamesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle the game card click to navigate to Product.js
  const handleCardClick = (game) => {
    onGameClick(game);  // Pass the clicked game up to App.js
  };

  return (
    <Container fluid>
      <Row>
        {currentGames.map((game) => (
          <Col key={game.id} xs={12} className="mb-3">
            <div
              className="card"
              style={{ ...cardStyle, cursor: 'pointer' }}  // Only change cursor on hover
              onClick={() => handleCardClick(game)} // Handle click event
            >
              {/* Game Image */}
              <img src={game.image} alt={game.name} style={cardImageStyle} />

              {/* Card Details */}
              <div style={cardDetailsStyle}>
                <div style={cardTitleStyle}>{game.name}</div>
                <div style={cardPriceStyle}>{game.price}</div>
                <div style={cardDescriptionStyle}>{game.description}</div>
                <div style={cardInfoStyle}>
                  <span>Rating: {game.rating}</span>
                  <span>Released: {game.releaseDate}</span>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Pagination Controls */}
      <div className="pagination-controls d-flex justify-content-between align-items-baseline mt-4">
        <Button
          variant="primary"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className='text-white'>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="primary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default GameCardList;
