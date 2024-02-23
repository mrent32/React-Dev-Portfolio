import React, {useState} from 'react';
import Intro from './components/Intro';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { render } from 'react-dom';
import Header from './components/Header';
function App() {
    const [currentPage, setCurrentPage] = useState('Home')
    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Intro />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        return <Contact />;
      };
    
      const handlePageChange = (page) => setCurrentPage(page);
    return (
     <div className='App'>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <main>
            {renderPage()}
        </main>

     </div>
    )
}

export default App
// usecontext react