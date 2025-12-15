import { useState, useContext, useEffect, createContext } from "react";

export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

const API = "https://693fc576993d68afba69a721.mockapi.io/productos";

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      setCargando(true);
      setError(null);

      const respuesta = await fetch(API);

      if (!respuesta.ok)
        throw new Error(`Error HTTP: ${respuesta.status}`);

      const datos = await respuesta.json();
      setProductos(datos);
    } catch (error) {
      console.error("Error al cargar productos: ", error);
      setError(error.message || "Error al cargar los productos");
    } finally {
      setCargando(false);
    }
  };

  const agregarProducto = async (producto) => {
    try {
      setError(null);

      const respuesta = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });

      if (!respuesta.ok)
        throw new Error(`Error HTTP: ${respuesta.status}`);

      const nuevoProducto = await respuesta.json();
      console.log("Producto agregado: ", nuevoProducto);

      setProductos(prev => [...prev, nuevoProducto]);
    } catch (error) {
      console.error("Error al agregar:", error);
      setError("Hubo un problema al agregar el producto.");
    }
  };

  const editarProducto = async (producto) => {
    try {
      setError(null);

      const respuesta = await fetch(`${API}/${producto.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });

      if (!respuesta.ok)
        throw new Error(`Error HTTP: ${respuesta.status}`);

      const productoActualizado = await respuesta.json();
      setProductos((prev) =>
        prev.map((p) => (p.id === productoActualizado.id ? productoActualizado : p))
      );
    } catch (error) {
      console.error("Error al editar:", error);
      setError("Hubo un problema al editar el producto.");
    }
  };

  const eliminarProducto = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar?");
    if (!confirmar) return;

    try {
      setError(null);

      const respuesta = await fetch(`${API}/${id}`, { method: "DELETE" });

      if (!respuesta.ok) throw new Error("Error al eliminar");

      setProductos((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error(error.message);
      setError("Hubo un problema al eliminar el producto.");
    }
  };

  return (
    <ProductosContext.Provider
      value={{
        productos,
        cargando,
        error,
        cargarProductos,
        agregarProducto,
        editarProducto,
        eliminarProducto,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export const useProductosContext = () => useContext(ProductosContext);
