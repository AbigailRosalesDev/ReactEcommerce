import './App.css';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemContainer from './containers/ItemContainer';
import Navbar from './components/navBar';
import CartPage from './containers/cart/Index';
import ItemDetails from './containers/details';
function App() {

React.useEffect(()=>{
  const listener= window.addEventListener('resize', onResize)
 return()=> window.removeEventListener(listener, onResize)

},[])

const onResize=(event)=>{
  const height=event.target.clientHeight;
  const width=event.target.clientWidth;
 
}

  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path={'/'} element={<ItemContainer />} />
        <Route path={'/products/:category'} element={<ItemContainer />} />
        <Route path={'/product/:id'} element={<ItemDetails/>} />
        <Route path={'/cart'} element={<CartPage />} />
        <Route path='/*'element={<Navigate to='/' replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
