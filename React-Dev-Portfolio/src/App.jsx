import React, {useState} from 'react';
import Intro from './components/Intro';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio'
import Footer from './components/Footer';
import Contact from './components/Contact';
import { render } from 'react-dom';

import './style/style.css';
function App() {
    return (
     <div className='App'>
        {/* <Header currentPage={currentPage} handlePageChange={handlePageChange} /> */}
        <main>
         <Intro /> 
            
        </main>

     </div>
    )
}

export default App
// usecontext react