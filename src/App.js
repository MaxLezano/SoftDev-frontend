import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Error404 from './pages/Error404';
import Home from './pages/home';
import PageCartRoute from './pages/PageCart';
import PageProducts from './pages/PageProducts';
import { LoginProvider } from './providers/LoginProvider';


function App() {
  return (
   
    <LoginProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pageproduct/:id' element={ <PageProducts/> }/>
        <Route path='/pagecart' element= {<PageCartRoute/>}/>
        <Route path='*' element={ <Error404/>}/>
      </Routes>
      <Footer />
    </LoginProvider>
    
  );
}

export default App;
