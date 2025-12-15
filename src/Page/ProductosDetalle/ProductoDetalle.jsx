import { useState, useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import style from "./ProductoDetalle.module.css";
import { CarritoContext } from "../../Context/CarritoContext";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const apiUrl = import.meta.env.VITE_API_URL;
  const { agregarAlCarrito } = useContext(CarritoContext);

  useEffect(() => {
    fetch(`${apiUrl}/${id}`)
      .then((respuesta) => respuesta.json())
      .then((dato) => setProducto(dato));
  }, [id]);

  if (!producto) {
    return (
      <div className={style.loadingContainer}>
        <div className={style.spinner}></div>
        <p className={style.loadingText}>Cargando producto...</p>
      </div>
    );
  }

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45];

  return (
    <div className={style.pageWrapper}>
      <div className={style.detalleContainer}>
        <div className={style.imageSection}>
          <div className={style.imagenContainer}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className={style.imagen}
            />
            <div className={style.imageOverlay}>
              <span className={style.zoomHint}>Hover para detalles</span>
            </div>
          </div>
          
          <div className={style.thumbnails}>
            <div className={style.thumbnail}>
              <img src={producto.imagen} alt="Vista 1" />
            </div>
            <div className={style.thumbnail}>
              <img src={producto.imagen} alt="Vista 2" />
            </div>
            <div className={style.thumbnail}>
              <img src={producto.imagen} alt="Vista 3" />
            </div>
          </div>
        </div>

        <div className={style.info}>
          <div className={style.breadcrumb}>
            <span>Inicio</span>
            <span className={style.separator}>/</span>
            <span>Productos</span>
            <span className={style.separator}>/</span>
            <span className={style.current}>{producto.nombre}</span>
          </div>

          <h1 className={style.nombre}>{producto.nombre}</h1>
          
          <div className={style.rating}>
            <div className={style.stars}>
              ★★★★★
            </div>
            <span className={style.reviews}>(127 reseñas)</span>
          </div>

          <div className={style.priceSection}>
            <span className={style.price}>$129.99</span>
            <span className={style.oldPrice}>$179.99</span>
            <span className={style.discount}>-28%</span>
          </div>

          <p className={style.descripcion}>{producto.descripcion}</p>

          <div className={style.divider}></div>

          <div className={style.sizeSection}>
            <div className={style.sizeHeader}>
              <h3 className={style.sizeTitle}>Selecciona tu talla</h3>
              <a href="#" className={style.sizeGuide}>Guía de tallas</a>
            </div>
            <div className={style.sizes}>
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`${style.sizeButton} ${selectedSize === size ? style.selected : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className={style.quantitySection}>
            <h3 className={style.quantityTitle}>Cantidad</h3>
            <div className={style.quantityControl}>
              <button 
                className={style.quantityBtn}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <span className={style.quantityValue}>{quantity}</span>
              <button 
                className={style.quantityBtn}
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className={style.actions}>
            <button className={style.addToCart}
             onClick={() => agregarAlCarrito(producto)}>
              Añadir al carrito
            </button>
            
          </div>

          <div className={style.features}>
            <div className={style.feature}>
              <div className={style.featureIcon}>📦</div>
              <div className={style.featureText}>
                <strong>Envío gratis</strong>
                <span>En pedidos superiores a $50</span>
              </div>
            </div>
            <div className={style.feature}>
              <div className={style.featureIcon}>↩️</div>
              <div className={style.featureText}>
                <strong>Devoluciones fáciles</strong>
                <span>30 días para devolver</span>
              </div>
            </div>
            <div className={style.feature}>
              <div className={style.featureIcon}>✓</div>
              <div className={style.featureText}>
                <strong>Garantía de calidad</strong>
                <span>Productos originales</span>
              </div>
            </div>
          </div>

          <div className={style.productId}>SKU: PRD-{id}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;