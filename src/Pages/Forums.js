import React, { useState } from 'react';
import { Container, Row, Col, Button, Pagination, InputGroup, FormControl, Card } from 'react-bootstrap';
import './Forums.css';

const initialForumData = [
  { id: 1, title: 'Forum 1', isSubscribed: true },
  { id: 2, title: 'Forum 2', isSubscribed: false },
  { id: 3, title: 'Forum 3', isSubscribed: true },
  { id: 4, title: 'Multiplayer Strategies', isSubscribed: false },
  { id: 5, title: 'Racing Enthusiasts', isSubscribed: true },
  { id: 6, title: 'Puzzle and Brain Teasers', isSubscribed: false },
  { id: 7, title: 'First-Person Shooters', isSubscribed: true },
  { id: 8, title: 'Role Playing Games', isSubscribed: false },
  { id: 9, title: 'Simulation Games', isSubscribed: true },
  { id: 10, title: 'Open World Exploration', isSubscribed: true },
  { id: 11, title: 'Indie Game Developers', isSubscribed: false },
  { id: 12, title: 'Horror Games', isSubscribed: true },
  { id: 13, title: 'Mobile Gaming', isSubscribed: false },
  { id: 14, title: 'Sandbox Games', isSubscribed: false },
  { id: 15, title: 'Casual Gamers', isSubscribed: true },
  { id: 16, title: 'Fighting Games', isSubscribed: false },
  { id: 17, title: 'Esports and Tournaments', isSubscribed: true },
  { id: 18, title: 'Sports Games', isSubscribed: false },
  { id: 19, title: 'Shooter Tactics', isSubscribed: true },
  { id: 20, title: 'MOBA Communities', isSubscribed: false },
  { id: 21, title: 'MMORPG Adventures', isSubscribed: true },
  { id: 22, title: 'Card and Board Games', isSubscribed: false },
  { id: 23, title: 'Strategy and War Games', isSubscribed: true },
  { id: 24, title: 'Survival and Crafting Games', isSubscribed: false },
  { id: 25, title: 'Racing Simulation', isSubscribed: true },
  { id: 26, title: 'Platformers and Jump & Runs', isSubscribed: false },
  { id: 27, title: 'VR and AR Gaming', isSubscribed: true },
  { id: 28, title: 'Retro Gaming', isSubscribed: true },
  { id: 29, title: 'PC Building & Hardware', isSubscribed: false },
  { id: 30, title: 'Game Streaming', isSubscribed: true }
];

const ForumsPage = () => {
  const [forums, setForums] = useState(initialForumData); // Use state to manage forum data
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [subscribedSearchTerm, setSubscribedSearchTerm] = useState('');
  const forumsPerPage = 16;

  // Pagination logic for public forums
  const indexOfLastForum = currentPage * forumsPerPage;
  const indexOfFirstForum = indexOfLastForum - forumsPerPage;
  const currentForums = forums.slice(indexOfFirstForum, indexOfLastForum);

  const totalPages = Math.ceil(forums.length / forumsPerPage);

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

  // Subscribe/Unsubscribe Functionality
  const toggleSubscription = (forumId) => {
    const updatedForums = forums.map((forum) => {
      if (forum.id === forumId) {
        return { ...forum, isSubscribed: !forum.isSubscribed };
      }
      return forum;
    });
    setForums(updatedForums);
  };

  // Handle Search for Public Forums
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle Search for Subscribed Forums
  const handleSubscribedSearch = (event) => {
    setSubscribedSearchTerm(event.target.value);
  };

  // Share Button Handler
  const handleShare = (forumTitle) => {
    alert(`Sharing ${forumTitle}!`);
  };

  return (
    <Container fluid className="forums-container">
      <Row>
        {/* Left Side: Public Forums (4 rows x 4 columns) */}
        <Col xs={12} md={8} className="public-forums">
          {/* Filter buttons */}
          <Row className="mb-3">
            <Col>
              <Button variant="primary" className="w-100">Most Replies</Button>
            </Col>
            <Col>
              <Button variant="primary" className="w-100">Most Liked</Button>
            </Col>
            <Col>
              <Button variant="primary" className="w-100">Most Recent</Button>
            </Col>
          </Row>

          {/* Public Forum List */}
          <Row>
            {currentForums.map((forum) => (
              <Col key={forum.id} xs={12} sm={6} md={3} className="mb-4">
                <Card bg="dark" text="light" className="forum-card">
                  <Card.Body>
                    <Card.Title className="card-title mb-4">{forum.title}</Card.Title>
                    <Card.Text className='card-description mb-4'>This is the description for {forum.title}.</Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button variant={forum.isSubscribed ? 'danger' : 'secondary'} onClick={() => toggleSubscription(forum.id)}>
                        {forum.isSubscribed ? 'Unsubscribe' : 'Subscribe'}
                      </Button>
                      <Button variant="success" onClick={() => handleShare(forum.title)}>
                        Share
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Pagination for Public Forums */}
          <Pagination className="justify-content-center">
            <Pagination.Prev onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </Pagination.Prev>
            <Pagination.Item active>{currentPage}/{totalPages}</Pagination.Item>
            <Pagination.Next onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </Pagination.Next>
          </Pagination>
        </Col>

        {/* Right Side: Subscribed Forums (1 per row) */}
        <Col xs={12} md={4} className="subscribed-forums">
          {/* Search Bar for Subscribed Forums */}
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Subscribed Forums..."
              value={subscribedSearchTerm}
              onChange={handleSubscribedSearch}
            />
            <Button variant="success">Search</Button>
          </InputGroup>

          <div className="subscribed-list">
            <h5 className="text-white mb-3">Subscribed Forums</h5>
            <div className="subscribed-container" style={{maxHeight: '73.5vh', overflowY: 'scroll'}}>
              {forums
                .filter((forum) => forum.isSubscribed)
                .map((forum) => (
                  <Card key={forum.id} bg="dark" text="light" className="mb-3 subscribed-card">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div>{forum.title}</div>
                      <Button variant="danger" onClick={() => toggleSubscription(forum.id)}>Leave</Button>
                    </Card.Body>
                  </Card>
                ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForumsPage;
