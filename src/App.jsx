import React, {useState} from 'react';
import Intro from './components/Intro';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { render } from 'react-dom';

import './style/style.css';
function App() {
    return (
     <div className='App'>
        
        <main>
            <Header />
            
         <Intro /> 
            
        </main>

     </div>
    )
    
}

export default App
// usecontext react