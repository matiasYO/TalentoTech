import { useState, useEffect } from "react";

const EditarProducto = ({ productoSeleccionado, onActualizacion }) => {
  const [producto, setProducto] = useState(productoSeleccionado || {
    nombre: '',
    precio: '',
    imagen: '',
    descripcion: ''
  });
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (productoSeleccionado) {
      setProducto(productoSeleccionado);
    }
  }, [productoSeleccionado]);

  const manejarChange = (evento) => {
    const { name, value } = evento.target;
    setProducto({ ...producto, [name]: value });
  };

  const manejarSubmit = async (evento) => {
    evento.preventDefault();
    try {
      const respuesta = await fetch(`${API}/${producto.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
      if (!respuesta.ok) throw new Error("Error al actualizar el producto");

      const datos = await respuesta.json();
      onActualizacion(datos);
    } catch (error) {
      console.error(error.message);
      alert("Hubo un problema al actualizar el producto");
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
        <h2>Editar Producto</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={producto.nombre || ''}
          onChange={manejarChange}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="precio"
          value={producto.precio || ''}
          onChange={manejarChange}
          required
          min = '0'
          step='any'
        />
      </div>
      <div>
        <label>URL de Imagen:</label>
        <input
          type="text"
          name="imagen"
          value={producto.imagen}
          onChange={manejarChange}
          required
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="descripcion"
          value={producto.descripcion || ''}
          onChange={manejarChange}
        />
      </div>
      <button type="submit">Actualizar Producto</button>
    </form>
  );
};

export default EditarProducto;