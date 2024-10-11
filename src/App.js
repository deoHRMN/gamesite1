
import './App.css';
import {useState} from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './Pages/Home.js';
import Store from './Pages/Store.js';
import Forums from './Pages/Forums.js';
import ModsPage from './Pages/ModShop.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Set initial page to Home

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'store':
        return <Store />
      case 'forums':
        return <Forums />
      case 'modshop':
        return <ModsPage />
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Header setCurrentPage={setCurrentPage} /> {/* Pass setCurrentPage to Navbar */}
      
      {renderPage()} {/* Render the current page based on state */}
      
      <Footer />
    </div>
  );
};

export default App;
