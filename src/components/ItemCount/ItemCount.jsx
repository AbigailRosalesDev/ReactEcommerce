import React from 'react'
import { useNavigate } from 'react-router-dom'

const ItemCount = ({ stock, addToCart }) => {
  const [counter, setCounter] = React.useState(1)
  const [clicked, setClicked] = React.useState(false)
  const navigate = useNavigate()

  const handleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  }
  const handleSubstract = () => {
    if (counter <= 1) {
      return;
    }
    setCounter(counter - 1);
  }
  const handleCart = () => {
    addToCart(counter);
    setCounter(1);
    setClicked(true)
  }

  const handleNavigationCart = () => {
    return navigate('/cart')
  }

  return (

    <div>

      {
        clicked ?
          <button onClick={handleNavigationCart}>Finalizar compra</button>
          :

          <>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center' }} >
              <button onClick={handleSubstract}>-</button>
              <div>
                <p>{counter} </p>
              </div>
              <button onClick={handleAdd} >+</button>
            </div>
            <div>
              <button onClick={handleCart}>
                Add to cart
              </button>
            </div>
          </>
      }
    </div>

  )

}

export default ItemCount