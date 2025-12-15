import { Link } from "react-router-dom";
import { useProductosContext } from "../../Context/ProductosContext";
import { useMemo, useRef, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import style from "./Carrousel.module.css";

function Carrousel() {
  const { productos } = useProductosContext();
  const carouselRef = useRef(null);

  const featured = useMemo(() => {
    return [...productos]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }, [productos]);

  const loopProducts = [...featured, ...featured, ...featured];

  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      const cardWidth = 292; 
      container.scrollLeft = cardWidth * featured.length;
    }
  }, [featured.length]);

  const scrollLeft = () => {
    const container = carouselRef.current;
    const scrollAmount = 292;
    
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    
    setTimeout(() => {
      const cardWidth = 292;
      const singleSetWidth = cardWidth * featured.length;
      
      if (container.scrollLeft <= scrollAmount) {
        container.scrollLeft = singleSetWidth + container.scrollLeft;
      }
    }, 400);
  };

  const scrollRight = () => {
    const container = carouselRef.current;
    const scrollAmount = 292;
    
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    
    setTimeout(() => {
      const cardWidth = 292;
      const singleSetWidth = cardWidth * featured.length;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (container.scrollLeft >= maxScroll - scrollAmount) {
        container.scrollLeft = container.scrollLeft - singleSetWidth;
      }
    }, 400);
  };

  return (
    <section className={style.carousel_section}>
      <h2 className={style.carousel_title}>Featured products</h2>

      <button className={style.arrow_left} onClick={scrollLeft}>
        <SlArrowLeft />
      </button>

      <button className={style.arrow_right} onClick={scrollRight}>
        <SlArrowRight />
      </button>

      <div className={style.carousel_wrapper} ref={carouselRef}>
        <div className={style.carousel_track}>
          {loopProducts.map((producto, index) => (
            <Link
              key={`${producto.id}-${index}`}
              to={`/productos/${producto.id}`}
              className={style.card}
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className={style.card_image}
              />
              <h3>{producto.nombre}</h3>
              <p>${producto.precio}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carrousel;