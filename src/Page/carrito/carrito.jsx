import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from "../../Context/CarritoContext";
import style from "./Carrito.module.css";

function Carrito() {
  const { carrito, vaciarCarrito, eliminarDelCarrito } = useContext(CarritoContext);

  // Calcular totales
const subtotal = carrito.reduce(
  (acc, producto) => acc + Number(producto.precio ?? producto.price ?? 0),
  0
);
  const envio = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + envio;

  if (carrito.length === 0) {
    return (
      <div className={style.pageWrapper}>
        <div className={style.emptyContainer}>
          <div className={style.emptyIcon}>🛒</div>
          <h2 className={style.emptyTitle}>Tu carrito está vacío</h2>
          <p className={style.emptyText}>
            Parece que aún no has agregado productos a tu carrito
          </p>
          <Link to="/productos" className={style.continueShopping}>
            Explorar productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={style.pageWrapper}>
      <div className={style.carritoContainer}>
        <div className={style.header}>
          <h1 className={style.titulo}>
            Carrito de Compras
            <span className={style.itemCount}>({carrito.length} {carrito.length === 1 ? 'producto' : 'productos'})</span>
          </h1>
          <button 
            className={style.vaciarBtn}
            onClick={vaciarCarrito}
          >
            Vaciar carrito
          </button>
        </div>

        <div className={style.content}>
          <div className={style.productosSection}>
            <div className={style.tableHeader}>
              <span>Producto</span>
              <span>Precio</span>
              <span>Cantidad</span>
              <span>Total</span>
              <span></span>
            </div>

            <div className={style.lista}>
              {carrito.map((producto, index) => (
                <div key={index} className={style.item}>
                  <div className={style.productoInfo}>
                    <div className={style.productoImagen}>
                      <img 
                        src={producto.imagen} 
                        alt={producto.nombre || producto.title} 
                      />
                    </div>
                    <div className={style.productoDetalles}>
                      <h3 className={style.productoNombre}>
                        {producto.nombre || producto.title}
                      </h3>
                      <p className={style.productoDesc}>
                        {producto.descripcion && producto.descripcion.substring(0, 60)}...
                      </p>
                      {producto.talla && (
                        <p className={style.productoTalla}>Talla: {producto.talla}</p>
                      )}
                    </div>
                  </div>

                  <div className={style.productoPrecio}>
  ${Number(producto.precio ?? producto.price ?? 0).toFixed(2)}
</div>


                  <div className={style.productoCantidad}>
                    <div className={style.cantidadControl}>
                      <button className={style.cantidadBtn}>−</button>
                      <span className={style.cantidadValor}>1</span>
                      <button className={style.cantidadBtn}>+</button>
                    </div>
                  </div>

                  <div className={style.productoTotal}>
  ${Number(producto.precio ?? producto.price ?? 0).toFixed(2)}
</div>


                  <div className={style.productoAcciones}>
                    <button 
                      className={style.deleteBtn}
                      onClick={() => eliminarDelCarrito(index)}
                      aria-label="Eliminar producto"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/productos" className={style.continueLink}>
              ← Continuar comprando
            </Link>
          </div>

          <div className={style.resumenSection}>
            <div className={style.resumenCard}>
              <h2 className={style.resumenTitulo}>Resumen del pedido</h2>

              <div className={style.resumenLinea}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className={style.resumenLinea}>
                <span>Envío</span>
                <span className={envio === 0 ? style.gratis : ''}>
                  {envio === 0 ? 'GRATIS' : `$${envio.toFixed(2)}`}
                </span>
              </div>

              {envio > 0 && (
                <div className={style.envioNotice}>
                  <span className={style.envioIcon}>📦</span>
                  Añade ${(50 - subtotal).toFixed(2)} más para envío gratis
                </div>
              )}

              <div className={style.divider}></div>

              <div className={style.resumenTotal}>
                <span>Total</span>
                <span className={style.totalAmount}>${total.toFixed(2)}</span>
              </div>

              <button className={style.checkoutBtn}>
                Proceder al pago
              </button>

              <div className={style.garantias}>
                <div className={style.garantia}>
                  <span className={style.garantiaIcon}>✓</span>
                  <span>Compra segura</span>
                </div>
                <div className={style.garantia}>
                  <span className={style.garantiaIcon}>✓</span>
                  <span>Devoluciones fáciles</span>
                </div>
                <div className={style.garantia}>
                  <span className={style.garantiaIcon}>✓</span>
                  <span>Envío rápido</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrito;