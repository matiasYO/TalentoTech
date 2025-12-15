import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useProductosContext } from "../../Context/ProductosContext";
import { CarritoContext } from "../../Context/CarritoContext";
import style from "./Productos.module.css";

const Productos = () => {
  const { productos, cargando, error } = useProductosContext();
  const { agregarAlCarrito } = useContext(CarritoContext);

  const productosPorPagina = 4;
  const [paginaActual, setPaginaActual] = useState(1);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  if (cargando) {
    return (
      <div className={style.loadingContainer}>
        <div className={style.spinner}></div>
        <p className={style.loadingText}>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={style.errorContainer}>
        <div className={style.errorIcon}>⚠️</div>
        <p className={style.errorText}>{error}</p>
      </div>
    );
  }

  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = productos.slice(
    indicePrimerProducto,
    indiceUltimoProducto
  );

  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  const handlePaginaAnterior = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  };

  const handlePaginaSiguiente = () => {
    if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
  };

  return (
    <div className={style.pageWrapper}>
      <div className={style.productosContainer}>
        <div className={style.header}>
          <div>
            <h1 className={style.titulo}>Nuestra Colección</h1>
            <p className={style.subtitulo}>
              {productos.length} productos disponibles
            </p>
          </div>
        </div>

        <div className={style.grid}>
          {productosActuales.map((producto) => (
            <div 
              key={producto.id} 
              className={style.card}
              onMouseEnter={() => setHoveredProduct(producto.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link to={`/productos/${producto.id}`} className={style.imageLink}>
                <div className={style.imagenContainer}>
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className={style.imagen}
                  />
                  <div className={style.overlay}>
                    <span className={style.quickView}>Vista rápida</span>
                  </div>
                  
                  {producto.nuevo && (
                    <span className={style.badge}>Nuevo</span>
                  )}
                </div>
              </Link>

              <div className={style.info}>
                <h3 className={style.nombre}>
                  <Link to={`/productos/${producto.id}`}>
                    {producto.nombre}
                  </Link>
                </h3>

                <div className={style.rating}>
                  <div className={style.stars}>★★★★★</div>
                  <span className={style.reviewCount}>(45)</span>
                </div>

                <div className={style.priceSection}>
                  <p className={style.precio}>${producto.precio}</p>
                  {producto.precioAnterior && (
                    <p className={style.precioAnterior}>${producto.precioAnterior}</p>
                  )}
                </div>

                <div className={style.acciones}>
                  <button
                    className={style.botonAgregar}
                    onClick={() => agregarAlCarrito(producto)}
                  >
                    <span className={style.cartIcon}></span>
                    Agregar al carrito
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginador mejorado */}
        <div className={style.paginador}>
          <button
            className={`${style.paginaBtn} ${style.navBtn}`}
            onClick={handlePaginaAnterior}
            disabled={paginaActual === 1}
          >
            ← Anterior
          </button>

          <div className={style.paginaNumeros}>
            {Array.from({ length: totalPaginas }, (_, i) => {
              const pagina = i + 1;
              
              // Mostrar solo páginas cercanas a la actual
              if (
                pagina === 1 ||
                pagina === totalPaginas ||
                (pagina >= paginaActual - 1 && pagina <= paginaActual + 1)
              ) {
                return (
                  <button
                    key={i}
                    className={`${style.paginaBtn} ${
                      paginaActual === pagina ? style.activa : ""
                    }`}
                    onClick={() => setPaginaActual(pagina)}
                  >
                    {pagina}
                  </button>
                );
              } else if (
                pagina === paginaActual - 2 ||
                pagina === paginaActual + 2
              ) {
                return <span key={i} className={style.dots}>...</span>;
              }
              return null;
            })}
          </div>

          <button
            className={`${style.paginaBtn} ${style.navBtn}`}
            onClick={handlePaginaSiguiente}
            disabled={paginaActual === totalPaginas}
          >
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productos;