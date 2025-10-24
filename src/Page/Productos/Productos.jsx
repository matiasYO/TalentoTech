import { useState, useEffect, useContext } from "react";
import style from "./Productos.module.css"
import { Link } from "react-router-dom";
import { CarritoContext } from "../../Context/CarritoContext";
export default function Productos() {

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const { agregarAlCarrito } = useContext(CarritoContext);
  
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(apiUrl)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        setError('Hubo un problema al cargar los productos.');
        setCargando(false);
      });
  }, []);


  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;
  
  return (
    <div className={style.productosContainer}>
      <h2>Lista de Productos</h2>

      <ul className={style.productosLista}>
        {productos.map((producto) => (

          <li key={producto.id} className={style.productoItem}>

            <h3>{producto.title}</h3>

            <img src={producto.image} alt={producto.title} width="100" />

            <p>${producto.price}</p>
            <button onClick={() => agregarAlCarrito(producto)}> Add</button>
            <Link  to={`/productos/${producto.id}`} > Preview </Link>
          </li>  
))}
      </ul>
    </div>
    
  )
}
