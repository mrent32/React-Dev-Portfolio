import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <>
        <BrowserRouter>
            <Header />
            </BrowserRouter>
        </>
    )
}

export default App
// usecontext react