import React, { useContext } from 'react';
import { CarritoContext } from "../../Context/CarritoContext";
function Carrito() {
 const { carrito, vaciarCarrito, eliminarDelCarrito} = useContext(CarritoContext);
 return (
    <div>
            <h1>Carrito de Compras</h1>
            {carrito.length > 0 ? (
                <ul>
                    {carrito.map((producto, index) => (
                        <li key={index}>{producto.title} - ${producto.price} <button onClick={() => eliminarDelCarrito(index)}>Deleted </button></li>
                    ))}
                </ul>
            ) : (
                <p>El carrito está vacío.</p>
            )}
            {carrito.length > 0 && <button onClick={vaciarCarrito}>Vaciar Carrito</button>}
            
        </div>
    );
}
export default Carrito;