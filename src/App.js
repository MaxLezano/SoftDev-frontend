import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/home';

function App() {
  return (
    <>
      <Header />
      <Card/>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
