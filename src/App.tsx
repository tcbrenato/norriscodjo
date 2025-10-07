import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Programme from './pages/Programme';
import Publicite from './pages/Publicite';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Admin from './pages/Admin';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin') {
      setCurrentPage('admin');
    }
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'gallery':
        return <Gallery />;
      case 'programme':
        return <Programme />;
      case 'publicite':
        return <Publicite />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return <Blog />;
      case 'admin':
        return <Admin />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage !== 'admin' && (
        <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      )}
      <main>{renderPage()}</main>
      {currentPage !== 'admin' && <Footer />}
    </div>
  );
}

export default App;
