import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Home from './pages/home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Card/>
      <Modal />
      <Footer />
    </>
  );
}

export default App;
