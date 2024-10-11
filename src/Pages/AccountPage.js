import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form, FormControl } from 'react-bootstrap';
import './AccountPage.css'; // Custom styling if needed

const initialAchievements = [
  { id: 1, game: 'Game 1', description: 'Master Strategist - Completed all strategy challenges.', color: 'primary' },
  { id: 2, game: 'Game 2', description: 'Speed Racer - Finished the race in record time.', color: 'danger' },
  { id: 3, game: 'Game 3', description: 'Stealth Master - Completed all stealth missions without detection.', color: 'success' },
  { id: 4, game: 'Game 4', description: 'Ultimate Collector - Collected all in-game items.', color: 'warning' },
  { id: 5, game: 'Game 5', description: 'Puzzle Master - Solved all puzzles.', color: 'info' },
  { id: 6, game: 'Game 6', description: 'Survivor - Survived all levels.', color: 'secondary' },
  { id: 7, game: 'Game 7', description: 'Speedster - Completed all time trials.', color: 'primary' },
  { id: 8, game: 'Game 8', description: 'Explorer - Discovered all hidden areas.', color: 'danger' },
  { id: 9, game: 'Game 9', description: 'Tactician - Defeated all bosses without taking damage.', color: 'success' },
];

const AccountPage = () => {
  const [activeComponent, setActiveComponent] = useState('Account');
  const [isFriendsListVisible, setIsFriendsListVisible] = useState(true);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New forum post reply on "Game Tactics" thread', seen: false },
    { id: 2, message: 'New like on your comment: "Epic game update!"', seen: false },
    { id: 3, message: 'Achievement unlocked: "Ultimate Collector"', seen: false },
  ]);
  const [accountInfo, setAccountInfo] = useState({ username: 'harmanpreetdeo123', email: 'harmanpreetdeo@example.com', country: 'United States' });
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '**** **** **** 1234', expirationDate: '12/25' });
  const [avatar, setAvatar] = useState('Select your avatar');
  const [isAccountChanged, setIsAccountChanged] = useState(false);
  const [isPaymentChanged, setIsPaymentChanged] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const achievementsPerPage = 3;

  const indexOfLastAchievement = currentPage * achievementsPerPage;
  const indexOfFirstAchievement = indexOfLastAchievement - achievementsPerPage;
  const currentAchievements = initialAchievements.slice(indexOfFirstAchievement, indexOfLastAchievement);

  const totalPages = Math.ceil(initialAchievements.length / achievementsPerPage);

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

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAccountInfo((prevState) => ({ ...prevState, [id]: value }));
    setIsAccountChanged(true);
  };

  const handlePaymentChange = (e) => {
    const { id, value } = e.target;
    setPaymentInfo((prevState) => ({ ...prevState, [id]: value }));
    setIsPaymentChanged(true);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleNotificationDismiss = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const toggleFriendsList = () => {
    setIsFriendsListVisible(!isFriendsListVisible);
  };

  return (
    <Container fluid className="account-page">
      <Row>
        {/* Left Side: Account Buttons */}
        <Col xs={12} md={3} className="account-buttons">
          <Button variant="dark" className="w-100 mb-3" onClick={() => handleComponentChange('Account')}>
            Account
          </Button>
          <Button variant="dark" className="w-100 mb-3" onClick={() => handleComponentChange('Payment')}>
            Payment
          </Button>
          <Button variant="dark" className="w-100 mb-3" onClick={() => handleComponentChange('Avatar')}>
            Avatar
          </Button>
        </Col>

        {/* Middle: User Account Settings Component */}
        <Col xs={12} md={6} className="user-account-settings">
          <Card bg="dark" text="white" className="p-3 custom-card mb-3">
            <Card.Body>
              {activeComponent === 'Account' && (
                <>
                  <h4>Account Information</h4>
                  <p>Update your account details below:</p>
                  <Form>
                    <Form.Group controlId="username" className="mb-3">
                      <Form.Label>Username:</Form.Label>
                      <FormControl type="text" value={accountInfo.username} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="email" className="mb-3">
                      <Form.Label>Email:</Form.Label>
                      <FormControl type="email" value={accountInfo.email} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="country" className="mb-3">
                      <Form.Label>Country:</Form.Label>
                      <FormControl as="select" value={accountInfo.country} onChange={handleInputChange}>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                      </FormControl>
                    </Form.Group>

                    <Button variant="secondary" className="w-100" disabled={!isAccountChanged}>
                      Save Changes
                    </Button>
                  </Form>
                </>
              )}

              {activeComponent === 'Payment' && (
                <>
                  <h4>Payment Methods</h4>
                  <p>Manage your payment methods below:</p>
                  <Form>
                    <Form.Group controlId="cardNumber" className="mb-3">
                      <Form.Label>Card Number:</Form.Label>
                      <FormControl type="text" value={paymentInfo.cardNumber} onChange={handlePaymentChange} />
                    </Form.Group>

                    <Form.Group controlId="expirationDate" className="mb-3">
                      <Form.Label>Expiration Date:</Form.Label>
                      <FormControl type="text" value={paymentInfo.expirationDate} onChange={handlePaymentChange} />
                    </Form.Group>

                    <Button variant="secondary" className="w-100" disabled={!isPaymentChanged}>
                      Update Payment
                    </Button>
                  </Form>
                </>
              )}

              {activeComponent === 'Avatar' && (
                <>
                  <h4>Avatar Settings</h4>
                  <p>Change your avatar below:</p>
                  <Form>
                    <Form.Group controlId="avatar" className="mb-3">
                      <Form.Label>Choose Avatar:</Form.Label>
                      <FormControl as="select" value={avatar} onChange={handleAvatarChange}>
                        <option>Select your avatar</option>
                        <option>Avatar 1</option>
                        <option>Avatar 2</option>
                        <option>Avatar 3</option>
                      </FormControl>
                    </Form.Group>

                    <Button variant="secondary" className="w-100">
                      Update Avatar
                    </Button>
                  </Form>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* Right Side: Notifications and Friends List */}
        <Col xs={12} md={3}>
          <Row>
            {/* Notifications */}
            <Col xs={12} className="user-notifications mb-3">
              <Card bg="dark" text="white" className="p-3 custom-card">
                <Card.Body>
                  <h5>User Notifications</h5>
                  <ul className="list-unstyled">
                    {notifications.map((notification) => (
                      <li key={notification.id} className="mb-2 d-flex justify-content-between">
                        <span>{notification.message}</span>
                        <span
                          style={{
                            color: 'green',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                          }}
                          onClick={() => handleNotificationDismiss(notification.id)}
                        >
                          ✔
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Friends Online */}
            <Col xs={12} className="friends-list">
              <Card bg="dark" text="white" className="p-3 custom-card">
                <Card.Body>
                  <h5 className="d-flex justify-content-between align-items-center">
                    Friend Status
                    <Button variant="outline-light" size="sm" onClick={toggleFriendsList}>
                      {isFriendsListVisible ? 'Hide' : 'Show'}
                    </Button>
                  </h5>
                  {isFriendsListVisible && (
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between">
                        Junyi Yu <span className="text-success">Online</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        Samuel Power <span className="text-danger">Offline</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        Ishu Kant <span className="text-success">Online</span>
                      </li>
                    </ul>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Bottom Row: Achievements */}
      <Row className="mt-4">
        <Col xs={12} className="achievement-window">
          <Card bg="dark" text="white" className="p-3 custom-card">
            <Card.Body>
              <h5>Achievement Window</h5>
              <ul className="list-unstyled achievement-list">
                {currentAchievements.map((achievement) => (
                  <li key={achievement.id} className="d-flex mb-3 align-items-center">
                    <div className={`achievement-icon bg-${achievement.color} text-white me-3`}>
                      {achievement.game}
                    </div>
                    {achievement.description}
                  </li>
                ))}
              </ul>

              <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={handlePrevPage} disabled={currentPage === 1}>
                  Previous
                </Button>
                <Button variant="secondary" onClick={handleNextPage} disabled={currentPage === totalPages}>
                  Next
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountPage;
