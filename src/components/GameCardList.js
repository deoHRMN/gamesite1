import React, { useState } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { games } from './Games';  // Assume games is imported from a data file

const GameCardList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 4; // Set how many games per page

  // Pagination logic
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);
  const totalPages = Math.ceil(games.length / gamesPerPage);

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction === 'next' && prevPage < totalPages) {
        return prevPage + 1;
      } else if (direction === 'prev' && prevPage > 1) {
        return prevPage - 1;
      }
      return prevPage; // Return the current page if no changes are needed
    });
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Button
          key={i}
          variant="secondary"
          onClick={() => setCurrentPage(i)}
          className={`mx-1 ${currentPage === i ? 'active' : ''}`}
        >
          {i}
        </Button>
      );
    }
    return buttons;
  };

  return (
    <Container fluid>
      <Row>
        {currentGames.map((game) => (
          <Col key={game.id} xs={12} md={6} lg={3} className="mb-3">
            <Card bg="dark" text="light" className="d-flex flex-row" style={{ height: '100%' }}>
              <Card.Img
                variant="top"
                src={game.image}
                style={{ width: '120px', height: '100%', objectFit: 'cover', borderRadius: '5px 0 0 5px' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between" style={{ minHeight: '200px' }}>
                <div>
                  <Card.Title className="text-white" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{game.title}</Card.Title>
                  <Card.Text className="text-success" style={{ fontSize: '1.2rem' }}>
                    {game.price}
                  </Card.Text>
                  <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{game.description}</Card.Text>
                </div>
                <div className="d-flex justify-content-between align-items-end">
                  <Card.Text>Rating: {game.rating}</Card.Text>
                  <Card.Text>Released: {game.releaseDate}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination Controls */}
      <div className="pagination-controls d-flex justify-content-between align-items-baseline mt-4">
        <Button
          variant="primary"
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="pagination-buttons d-flex">
          {renderPaginationButtons()}
        </div>
        <Button
          variant="primary"
          onClick={() => handlePageChange('next')}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default GameCardList;


