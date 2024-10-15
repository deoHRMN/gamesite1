import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const ProductPage = ({ game, onBack }) => {
  const [comments, setComments] = useState([
    'Amazing game with stunning visuals and gameplay!',
    'A must-play for action lovers!',
  ]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([newComment, ...comments]); // Add new comment at the top
      setNewComment(''); // Clear the input field
    }
  };

  if (!game) {
    return <div>Loading game details...</div>;
  }

  return (
    <Container fluid style={{ padding: '20px',  height:'100%', background: 'linear-gradient(90deg, #6d00a3, #00d4ff)',  /* Same gradient as header */ color: '#f0f0f0' }}>
      <Row className="align-items-stretch">
        {/* Left Column: Game Details and DLCs (70%) */}
        <Col md={8} className="d-flex flex-column mb-4">
          {/* Game Section */}
          <div style={{ border: '2px solid #333', borderRadius: '10px', padding: '20px', width:'100%', backgroundColor: '#1e1e1e', marginBottom: '20px', flexGrow: 1 }}>
            <img
              src={game.image || 'https://via.placeholder.com/300x200?text=Game+Image'}
              alt={game.title}
              style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', marginBottom: '20px' }}
            />
            <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>{game.title}</h1>
            <div style={{ fontSize: '1.2rem', marginBottom: '20px' }}>{'⭐'.repeat(Math.round(game.rating))}</div>
            <p><strong>Release Date:</strong> {game.releaseDate}</p>
            <p><strong>Categories:</strong> {game.categories ? game.categories.join(', ') : 'No categories available'}</p>
            <p>{game.description}</p>
            <Button variant="success" style={{ width: 'fit-content', padding: '10px 20px' }}>
              Add to Library
            </Button>
          </div>

          {/* DLCs Section */}
          <div style={{ border: '2px solid #333',  width:'100%', borderRadius: '10px', padding: '20px', paddingBottom:'0', backgroundColor: '#1e1e1e' }}>
            <h4>DLCs and Add-ons</h4>
            <div style={{ marginBottom: '10px' }}>
              <h5 style={{ color: '#4caf50' }}>DLC 1: Expansion Pack</h5>
              <p>Unlock additional levels and storylines.</p>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <h5 style={{ color: '#4caf50' }}>DLC 2: New Missions</h5>
              <p>Test your skills with harder missions and challenges.</p>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <h5 style={{ color: '#4caf50' }}>DLC 3: Weapon Pack</h5>
              <p>Access exclusive weapons and upgrades.</p>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <h5 style={{ color: '#4caf50' }}>DLC 4: Character Skins</h5>
              <p>Customize your characters with unique skins.</p>
            </div>
          </div>
        </Col>

        {/* Right Column: Comments (30%) */}
        <Col md={4} className="d-flex flex-column" style={{paddingBottom:'20px'}}>
          <div style={{ border: '2px solid #333',  width:'100%', borderRadius: '10px', padding: '15px', backgroundColor: '#1e1e1e', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <h3>Comments</h3>
            <Form onSubmit={handleCommentSubmit} className="d-flex mb-3">
              <Form.Control
                type="text"
                placeholder="Write something..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                style={{ marginRight: '10px', backgroundColor: 'white', color: 'black', border: '1px solid #444' }}
              />
              <Button type="submit" variant="success">
                Comment
              </Button>
            </Form>

            <div style={{ maxHeight: '80vh', overflowY: 'auto', flexGrow: 1 }}>
              {comments.map((comment, index) => (
                <div key={index} style={{ padding: '10px', marginBottom: '5px', backgroundColor: '#2b2b2b', borderRadius: '5px' }}>
                  {comment}
                  <div className="d-flex justify-content-start mt-1" style={{ fontSize: '0.85rem', color: '#aaa' }}>
                    <span style={{ marginRight: '10px', cursor: 'pointer', color: '#4caf50' }}>Like</span>
                    <span style={{ cursor: 'pointer', color: '#007bff' }}>Reply</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
