import React, { useState } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { games } from './Games';  // Assume games is imported from a data file

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
          <Col key={game.id} xs={12} md={6} lg={4} className="mb-3"> {/* Responsive column sizes */}
            <Card bg="dark" text="light" className="d-flex flex-row" style={{ height: '100%' }}>
              <Card.Img
                variant="top"
                src={game.image}
                style={{ width: '120px', height: '100%', objectFit: 'cover', borderRadius: '5px 0 0 5px' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div className="text-container"> {/* New container to handle overflow */}
                  <Card.Title className="text-white">{game.title}</Card.Title>
                  <Card.Text className="text-success" style={{ fontSize: '1.2rem' }}>
                    {game.price}
                  </Card.Text>
                  <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
                    {game.description}
                  </Card.Text>
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
