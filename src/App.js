import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Error404 from './pages/error404';
import Home from './pages/home';
import PageProducts from './pages/PageProducts';
import { LoginProvider } from './providers/LoginProvider';

function App() {
  return (
    <LoginProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<PageProducts />}/>
        <Route path='/error404' element={<Error404 />}/>
      </Routes>
      <Footer />
    </LoginProvider>
  );
}

export default App;
