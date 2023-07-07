import React from "react";
import TabsMenu from "../../components/tabs";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../../logic/connInfo/Conexion";
import ItemList from "../../components/itemList";


/*Category name and ID for tabs */
const Categorias = [
  { id: "all", title: "Todos los productos" },
  { id: "book", title: "Libros" },
  { id: "album", title: "Albumes" },
  { id: "KP", title: "K-pop" },
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
  backgroundColor:' #dee3ed',

}

const ItemContainer = () => {
  const [items, setItems] = React.useState([]);
  /*Charge of the page, false so doesn't always initialize */
  const [loading, setLoading] = React.useState([false])
   
  const { category } = useParams();
  const navigate = useNavigate();
  const current = Categorias.some(cat => cat.id === category)
    ? category
    : "all";
     /*Getting the products from the conn, then put the loading and finishing with the information about products that I want to see */
     React.useEffect(() => {
      setLoading(true)
      getProducts(searchCategory(category))
        .then(res => res.json())
        .then(res => {
          const data = res.results?.map((elemento) => ({
            id: elemento.id,
            title: elemento.title,
            price: elemento.price,
            image: elemento.thumbnail
  
          }))
          setItems(data)
        })
        .finally(() => setLoading(false))
    }, [category])
  
  
  /*If someone try to put a fake direction, it comes back to 'all' */
  React.useEffect(() => {
    if (!Categorias.some(cat => cat.id === category)) {
      navigate("/products/all");
    }
  }, [category, navigate]);


  return (
    <div >
      <TabsMenu current={current} items={Categorias} />
      <div style={ContainerStyle}>
        <ItemList items={items} loading={loading} />
      </div>
    </div>

  );
};

export default ItemContainer;
