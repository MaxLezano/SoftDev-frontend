import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Error404 from './pages/error404';
import Home from './pages/home';
import PageProduct from './pages/pageProduct';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<PageProduct />}/>
        <Route path='/error404' element={<Error404 />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
