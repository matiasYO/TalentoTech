import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductoDetalle = ()=>{

    const {id} =useParams();
    const [producto , setProducto] = useState(null);
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() =>{
        fetch(`${apiUrl}/${id}`)
        .then(respuesta => respuesta.json())
        .then(dato => setProducto(dato));
    },[id]);

    if(!producto) return <p> Cargando ... .....</p>

    return(
        <>
            <h2> Detalles del producto Nro {id}</h2>
            <img src={producto.image} alt={producto.title} height={80} width={80} />
            <h3> {producto.title}</h3>
            <p> {producto.description} </p>
        </>
    );
}

export default ProductoDetalle;