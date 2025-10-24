import React, { createContext, useState } from 'react';
export const CarritoContext = createContext();

export function CarritoProvider({ children }) {

    const [carrito, setCarrito] = useState([]);
    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const eliminarDelCarrito = (indiceAEliminar) => {
    setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
    };



    return (
        <CarritoContext.Provider value={{ carrito, eliminarDelCarrito ,agregarAlCarrito, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    );
}