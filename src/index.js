import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Player from './pages/Player';
import AI from './pages/AI';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './pages/Footer';
import Header from './pages/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header />
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Routes>
    <Route path='/' element={<App />}/> 
    <Route path='/Multiplayer' element={<Player />}/>
    <Route path='/Computer' element={<AI />}/>

  </Routes>
  </BrowserRouter>
  <Footer />
  
  </>
);

