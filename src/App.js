import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/home';
import PageProducts from './pages/PageProducts';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pageproduct' element={ <PageProducts/> }/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
