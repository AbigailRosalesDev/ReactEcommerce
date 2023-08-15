import React from "react";
import TabsMenu from "../../components/tabs";
import { useNavigate, useParams } from "react-router-dom";
import ItemList from "../../components/itemList";
import { getFirestore, collection, doc, getDoc, getDocs, where, query } from 'firebase/firestore';

/*Category name and ID for tabs */
const CATEGORIES = [
  { id: "all", title: "All" },
  { id: "peluche", title: "Peluches" },
  { id: "album", title: "Albumes" },
  { id: "photocards", title: "Photocards" },
];

/*Styling */
const ContainerStyle = {
  backgroundColor: 'white',

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
