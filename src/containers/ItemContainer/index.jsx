import React from "react";
import TabsMenu from "../../components/tabs";
import { useNavigate, useParams } from "react-router-dom";
//import { getProducts } from "../../logic/connInfo/Conexion";
import ItemList from "../../components/itemList";
import { getFirestore, collection, doc, getDoc, getDocs, where, query } from 'firebase/firestore';

/*Category name and ID for tabs */
const CATEGORIES = [
  { id: "all", title: "All" },
  { id: "peluche", title: "Peluches" },
  { id: "album", title: "Albumes" },
  { id: "photocards", title: "Photocards" },
];

/*Look up the categories and connect it to the array */
const searchCategory = (id) => {
  switch (id) {
    case 'album':
      return 'album de musica';
    case 'book':
      return 'libros';
    case 'KP':
      return 'K-pop';
    default:
      return 'Cuadros';

  }
}
/*Styling */
const ContainerStyle = {
  backgroundColor: ' #dee3ed',

}

const ItemContainer = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const { category } = useParams();
  const navigate = useNavigate();
  // const category = useParams().category;

  const current = CATEGORIES.some(cat => cat.id === category) ? category : 'all';


  React.useEffect(() => {
    if (!CATEGORIES.some(cat => cat.id === category)) {
      navigate('/products/all');
    }
  }, [category, navigate])
  /*Getting the products from the conn, then put the loading and finishing with the information about products that I want to see */
  /*React.useEffect(() => {
   setLoading(true)
   getProducts(searchCategory(category))
     .then(res => res.json())
     .then(res => {
       const data = res.results?.map((elemento) => ({
         id: elemento.id,
         title: elemento.title,
         price: elemento.price,
         image: elemento.thumbnail,
         stock:elemento.available_quantity
       }))
       setItems(data)
     })
     .finally(() => setLoading(false))
 }, [category])*/
  React.useEffect(() => {

    setLoading(true);

    const db = getFirestore();

    const getCollection = collection(db, 'productos');


    if (category === 'all') {
      getDocs(getCollection)
        .then((snapshot) => {
          setLoading(false);
          setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
    } else if (CATEGORIES.some(categories => categories.id === category)) {
      const q = query(getCollection, where("categoryID", '==', category))
      getDocs(q)
        .then((snapshot) => {
          setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
          setLoading(false)
        })
    }
  }, [category])



  return (
    <div >
      <TabsMenu current={current} items={CATEGORIES} />
      <div style={ContainerStyle}>
        <ItemList items={items} loading={loading} />
      </div>
    </div>

  );
};

export default ItemContainer;
