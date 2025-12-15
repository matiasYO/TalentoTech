import { useState } from "react";
import FormProducto from "../FormProductos/FormProductos";
import { useProductosContext } from "../../Context/ProductosContext";
import styles from "./GestionProductos.module.css";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";

const GestionProductos = () => {
  const { productos, eliminarProducto } = useProductosContext();

  const [mostrarForm, setMostrarForm] = useState(false);
  const [modoFormulario, setModoFormulario] = useState("agregar");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const abrirFormularioAgregar = () => {
    setModoFormulario("agregar");
    setProductoSeleccionado(null);
    setMostrarForm(true);
  };

  const abrirFormularioEditar = (producto) => {
    setModoFormulario("editar");
    setProductoSeleccionado(producto);
    setMostrarForm(true);
  };

  const cerrarFormulario = () => {
    setMostrarForm(false);
    setProductoSeleccionado(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.cabecera}>
          <h2>Lista de Productos</h2>

          <button
            onClick={abrirFormularioAgregar}
            className={styles.botonAgregar}
          >
            <FiPlusCircle size={20} />
            <p>Agregar Producto</p>
          </button>
        </div>

        {productos.length === 0 ? (
          <p>No hay productos</p>
        ) : (
          <div style={{ display: "grid", gap: "5px" }}>
            {productos.map((producto) => (
              <div
                key={producto.id}
                className={styles.productoItem}
              >
                <img
                  className={styles.imagen}
                  src={producto.imagen}
                  alt={producto.nombre}
                />

                <h3>{producto.nombre}</h3>
                <p>Precio: ${producto.precio}</p>

                <button
                  className={styles.boton}
                  onClick={() => abrirFormularioEditar(producto)}
                  title="Editar"
                >
                  <FiEdit size={18} />
                </button>

                <button
                  className={styles.boton}
                  onClick={() => eliminarProducto(producto.id)}
                  title="Eliminar"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {mostrarForm && (
        <FormProducto
          productoInicial={productoSeleccionado || {}}
          modo={modoFormulario}
          onCerrar={cerrarFormulario}
        />
      )}
    </div>
  );
};

export default GestionProductos;
