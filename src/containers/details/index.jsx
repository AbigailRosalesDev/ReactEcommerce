import React from 'react'
import { getProduct } from '../../logic/connInfo/Conexion'
import { useParams } from 'react-router-dom';
import ProductDetailConteiner from '../../components/productDetails';

const ItemDetails = (image, title, price, description) => {
  
  const [data, setData] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    getProduct(id)
      .then((res) => res.json()
        .then((res) => setData(res)))
  }, [id])

  return (
    <div>
<ProductDetailConteiner data={data} />
    </div>
  )
}

export default ItemDetails