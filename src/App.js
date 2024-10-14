import './App.css';
import { useState } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './Pages/Home.js';
import Store from './Pages/Store.js';
import Forums from './Pages/Forums.js';
import ModsPage from './Pages/ModShop.js';
import AccountPage from './Pages/AccountPage.js';
import ProductPage from './Pages/Product'; // Import Product page
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Set initial page to Home
  const [selectedGame, setSelectedGame] = useState(null); // State to manage selected game

  // Handle game click from GameCardList component inside Store
  const handleGameClick = (game) => {
    setSelectedGame(game); // Set the selected game when clicked
    sessionStorage.setItem('selectedGame', JSON.stringify(game)); // Store the selected game in sessionStorage
    setCurrentPage('product'); // Navigate to Product page
  };

  // Handle back action in Product page
  const handleBackToStore = () => {
    setSelectedGame(null); // Clear the selected game
    setCurrentPage('store'); // Go back to the Store page
  };

  // Function to render pages based on the state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'store':
        return <Store onGameClick={handleGameClick} />; // Pass handleGameClick to Store
      case 'forums':
        return <Forums />;
      case 'modshop':
        return <ModsPage />;
      case 'settings':
        return <AccountPage />;
      case 'product':
        return <ProductPage game={selectedGame} onBack={handleBackToStore} />; // Show Product page
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Header setCurrentPage={setCurrentPage} /> {/* Pass setCurrentPage to Header */}
      {renderPage()} {/* Render the current page based on state */}
      <Footer />
    </div>
  );
}

export default App;
