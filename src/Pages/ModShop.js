import React, { useState } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Card } from 'react-bootstrap';
import './ModShop.css';

const initialModsData = [
    { id: 1, title: 'Mod 1', isAdded: true },
    { id: 2, title: 'Mod 2', isAdded: false },
    { id: 3, title: 'Mod 3', isAdded: true },
    { id: 4, title: 'Multiplayer Enhancer', isAdded: false },
    { id: 5, title: 'Racing Mod Pack', isAdded: true },
    { id: 6, title: 'Puzzle Enhancements', isAdded: false },
    { id: 7, title: 'Shooter Booster', isAdded: true },
    { id: 8, title: 'RPG Expansion', isAdded: false },
    { id: 9, title: 'Simulation Addon', isAdded: true },
    { id: 10, title: 'Open World Mod', isAdded: true },
    { id: 11, title: 'Indie Game Modder', isAdded: false },
    { id: 12, title: 'Horror Mods Pack', isAdded: true },
    { id: 13, title: 'Mobile Enhancer', isAdded: false },
    { id: 14, title: 'Sandbox Plus', isAdded: false },
    { id: 15, title: 'Casual Gamers Mod', isAdded: true },
    { id: 16, title: 'Fighter Enhancements', isAdded: false },
    { id: 17, title: 'Esports Tournament Mod', isAdded: true },
    { id: 18, title: 'Sports Gameplay Plus', isAdded: false },
    { id: 19, title: 'Shooter Tactics Enhancer', isAdded: true },
    { id: 20, title: 'MOBA Heroes Booster', isAdded: false },
    { id: 21, title: 'MMORPG Adventures Addon', isAdded: true },
    { id: 22, title: 'Card and Board Game Addons', isAdded: false },
    { id: 23, title: 'Strategy and War Enhancements', isAdded: true },
    { id: 24, title: 'Survival and Crafting Mod', isAdded: false },
    { id: 25, title: 'Racing Simulation Pack', isAdded: true },
    { id: 26, title: 'Platformers Mod Bundle', isAdded: false },
    { id: 27, title: 'VR and AR Gaming Enhancer', isAdded: true },
    { id: 28, title: 'Retro Gaming Mods', isAdded: true },
    { id: 29, title: 'PC Hardware Modding', isAdded: false },
    { id: 30, title: 'Game Streaming Enhancer', isAdded: true }
];

const versionReleases = [
    { id: 1, version: 'v1.2', releaseDate: '2023-09-15' },
    { id: 2, version: 'v1.1', releaseDate: '2023-08-10' },
    { id: 3, version: 'v1.0', releaseDate: '2023-07-20' },
    { id: 2, version: 'v1.1', releaseDate: '2023-08-10' },
    { id: 3, version: 'v1.0', releaseDate: '2023-07-20' },
  ];
  
  const ModsPage = () => {
    const [mods, setMods] = useState(initialModsData); // Use state to manage mod data
    const [currentPage, setCurrentPage] = useState(1);
    const [addedSearchTerm, setAddedSearchTerm] = useState('');
    const modsPerPage = 16;
  
    // Pagination logic for public mods
    const indexOfLastMod = currentPage * modsPerPage;
    const indexOfFirstMod = indexOfLastMod - modsPerPage;
    const currentMods = mods.slice(indexOfFirstMod, indexOfLastMod);
  
    const totalPages = Math.ceil(mods.length / modsPerPage);
  
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
  
    // Add/Remove Functionality
    const toggleAdd = (modId) => {
      const updatedMods = mods.map((mod) => {
        if (mod.id === modId) {
          return { ...mod, isAdded: !mod.isAdded };
        }
        return mod;
      });
      setMods(updatedMods);
    };
  
    // Handle Search for Added Mods
    const handleAddedSearch = (event) => {
      setAddedSearchTerm(event.target.value);
    };

    // Share Button Handler
    const handleShare = (modTitle) => {
        alert(`Sharing ${modTitle}!`);
    };
  
    return (
      <Container fluid className="mods-container">
        <Row>
          {/* Left Side: Public Mods (4 rows x 4 columns) */}
          <Col xs={12} md={8} className="public-mods">
            {/* Filter buttons */}
            <Row className="mb-3">
              <Col>
                <Button variant="warning" className="w-100">Most Popular</Button>
              </Col>
              <Col>
                <Button variant="warning" className="w-100">Newest</Button>
              </Col>
            </Row>
  
            {/* Public Mod List */}
            <Row>
              {currentMods.map((mod) => (
                <Col key={mod.id} xs={12} sm={6} md={3} className="mb-4">
                  <Card bg="dark" text="light" className="mod-card">
                    <Card.Body>
                      <Card.Title className="card-title mb-4">{mod.title}</Card.Title>
                      <Card.Text className='card-description mb-4'>This is the description for {mod.title}.</Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button variant={mod.isAdded ? 'danger' : 'secondary'} onClick={() => toggleAdd(mod.id)}>
                          {mod.isAdded ? 'Remove' : 'Add'}
                        </Button>
                        <Button variant="success" onClick={() => handleShare(mod.title)}>
                        Share
                      </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
  
            {/* Pagination for Public Mods - Styled like the StorePage */}
            <div className="pagination-controls d-flex justify-content-between align-items-baseline mt-4">
              <Button
                variant="warning"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span className='text-white'>
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="warning"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </Col>
  
          {/* Right Side: Added Mods and Version Releases */}
          <Col xs={12} md={4} className="added-mods">
            {/* Search Bar for Added Mods */}
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search Added Mods..."
                value={addedSearchTerm}
                onChange={handleAddedSearch}
              />
              <Button variant="success">Search</Button>
            </InputGroup>
  
            {/* Added Mods List */}
            <div className="added-list">
              <h5 className="text-white mb-3">Added Mods</h5>
              <div className="added-container" style={{ maxHeight: '50vh', overflowY: 'scroll' }}>
                {mods
                  .filter((mod) => mod.isAdded)
                  .map((mod) => (
                    <Card key={mod.id} bg="dark" text="light" className="mb-3 added-card">
                      <Card.Body className="d-flex justify-content-between align-items-center">
                        <div>{mod.title}</div>
                        <Button variant="danger" onClick={() => toggleAdd(mod.id)}>Remove</Button>
                      </Card.Body>
                    </Card>
                  ))}
              </div>
            </div>
  
            {/* Version Releases Section */}
            <div className="version-releases mt-4">
              <h5 className="text-white mb-3">Version Releases</h5>
              <div className="version-container" style={{ maxHeight: '22.5vh', overflowY: 'scroll' }}>
                {versionReleases.map((release) => (
                  <Card key={release.id} bg="dark" text="light" className="mb-2 version-card">
                    <Card.Body>
                      <Card.Text>{release.version} - Released on {release.releaseDate}</Card.Text>
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
  
  export default ModsPage;