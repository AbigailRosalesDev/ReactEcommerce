import React from 'react'
import { useParams } from 'react-router-dom';
import ProductDetailConteiner from '../../components/productDetails';
import { AppContext } from '../../components/context/Context';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetails = () => {
  
  const [data, setData] = React.useState();
  const { id } = useParams();
const {addProductToCart}= React.useContext(AppContext);


React.useEffect(()=>{
  const db=getFirestore();
  const getProduct= doc(db, 'productos', id);

  getDoc(getProduct)
  .then((snapshot)=>{
    setData({id:snapshot.id, ...snapshot.data()})
  })
}, [id])

  return (
    <div>
<ProductDetailConteiner data={data} addToCart={addProductToCart} />
    </div>
  )
}

export default ItemDetails