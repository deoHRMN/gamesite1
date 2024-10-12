import React, { useState } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { games } from './Games';  // Assume games is imported from a data file
import './GameCardList.css';

const GameCardList = () => {
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

  return (
    <Container fluid>
      <Row>
        {currentGames.map((game) => (
          <Col key={game.id} xs={12} className="mb-3">
            <div className="card">
              {/* Game Image */}
              <img src={game.image} alt={game.title} className="card-image" />

              {/* Card Details */}
              <div className="card-details">
                <div className="card-title">{game.title}</div>
                <div className="card-price">{game.price}</div>
                <div className="card-description">{game.description}</div>
                <div className="card-info">
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
        <span className="text-white">
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
