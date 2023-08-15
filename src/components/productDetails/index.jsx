import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ProductDetailConteiner = ({ data, addToCart }) => {
  return (
    <div style={{
      padding: '10px 40px',
      display: 'flex',
      flexFlow:'wrap',
      alignItems:'center',
      justifyContent:'center'
    }}>
      <img src={data?.imageURL} alt={data?.title} style={{
        maxWidth:500,
        borderRadius:'8%'
      }} />
      <div style={{
        flexDirection:'column',
        padding:'20vh',
        margin:'3vh',
        backgroundColor:'#F9F8FD',
        maxWidth:500,
        borderRadius:'8%'

      }}>
        <h2>{data?.title}</h2>
        <h3>{data?.description}</h3>
        <p>{data?.price} </p> 
             <ItemCount stock={data?.available_quantity || 0} addToCart={addToCart} />
      </div>


    </div>
  )
}

export default ProductDetailConteiner