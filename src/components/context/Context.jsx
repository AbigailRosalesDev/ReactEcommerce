import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import React from 'react';
import Swal from 'sweetalert2';

export const AppContext=React.createContext();
const{Provider}=AppContext;

const Context = ({children} ) => {
  const [orderId, setOrderId] = React.useState('');


  const[carrito,setCarrito]=React.useState([]);
  const addProductToCart=(product)=>{
  setCarrito([...carrito, product]);
 } 
 const createNewOrder = (order) => {
  const db = getFirestore();
  const orders = collection(db, 'orders');

  addDoc(orders, order)
  .then((snapshot) => {
      setOrderId(snapshot.id)
      setCarrito([]);
      Swal.fire(
          'Good job!',
          `Su orden #${snapshot.id} fué procesada correctamente!`,
          'success'
        )
      
        const getDoc = doc(db, 'orders', snapshot.id);

        updateDoc(getDoc, {orderId: snapshot.id})
          
  })
  .catch((err) => {
      console.log(err);
  })
}

 return (
<Provider value={{ carrito, addProductToCart, quantityCart: carrito.length, createNewOrder, lastOrder: orderId  }}>
            { children }
        </Provider>
  )
}

export default Context