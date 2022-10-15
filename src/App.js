import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Error404 from './pages/error404';
import Home from './pages/home';
import PageCart from './pages/PageCart';
import PageFav from './pages/PageFav';
import PageProduct from './pages/PageProduct';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pagecart' element= {<PageCart/>}/>
        <Route path='/pagefav' element={<PageFav/>}/>
        <Route path='*' element={ <Error404/>}/>
        <Route path='/product' element={<PageProduct/>}/>
        <Route path='/error404' element={<Error404 />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
