import React from 'react'
import { AppContext } from '../../components/context/Context'
import UserInfo from '../../components/userInfo/UserInfo';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { carrito, createNewOrder, lastOrder } = React.useContext(AppContext);
  console.log(carrito);

  return (
    <div>
      <h1>Cart</h1>
     { 
     !carrito.length ?
     <>
     <p>No hay elementos en el carrito</p>
     <Link to="/products/:category">Ir a comprar</Link>
     </>
     :
     <>
     <div>
        <ul>
        {
          carrito.map((item, index) => (
            <li key={item.id + index} style={{ listStyleType: 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center'}}>
                <img src={item.imageURL} alt={item.title} style={{ width: 40}} />
                <img src={item.image}  alt="" />
                <h2>{item.title}</h2>
                <h3>{`$${item.pricePerUnit * item.quantity} ($${item.pricePerUnit} x ${item.quantity})`}</h3>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
      <UserInfo carrito={carrito} createNewOrder={createNewOrder} lastOrder={lastOrder} />
      </>
      }
    </div>
  )
}

export default CartPage