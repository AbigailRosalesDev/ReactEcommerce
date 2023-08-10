import './App.css';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemContainer from './containers/ItemContainer';
import Navbar from './components/navBar';
import CartPage from './containers/cart/Index';
import Context from './components/context/Context';
import ItemDetails from './containers/details';
import Carrusel from './containers/Swiper/Swiper';
function App() {


  return (
    <BrowserRouter >
     <Context>
     <Navbar />

      <Routes>
        <Route path={'/'} element={    <Carrusel/>} />
        <Route path={'/products/:category'} element={<ItemContainer />} />
        <Route path={'/product/:id'} element={<ItemDetails/>} />
        <Route path={'/cart'} element={<CartPage />} />
        <Route path='/*'element={<Navigate to='/' replace={true} />} />
      </Routes>
      </Context>
    </BrowserRouter>
  );
}

export default App;
