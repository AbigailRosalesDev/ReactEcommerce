import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ProductDetailConteiner = ({data, addToCart} ) => {
  return (
    <div style={{ padding: '10px 40px' }}>      
        <img src={data?.imageURL} alt={data?.title} />
        <h2>{data?.title}</h2>
        <h3>{data?.description}</h3>
        <p>{data?.price} </p>
        <ItemCount stock={data?.available_quantity || 0} addToCart={addToCart} />
    </div>
  )
}

export default ProductDetailConteiner