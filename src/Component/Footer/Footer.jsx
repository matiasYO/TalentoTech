import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.brand}>
            <h3 className={style.logo}>KOA</h3>
            <p className={style.tagline}>Elegancia en cada paso</p>
          </div>

          <div className={style.links}>
            <div className={style.linkColumn}>
              <h4>Productos</h4>
              <a href="#">Hombre</a>
              <a href="#">Mujer</a>
              <a href="#">Colecciones</a>
              <a href="#">Nuevos</a>
            </div>
            
            <div className={style.linkColumn}>
              <h4>Empresa</h4>
              <a href="#">Sobre Nosotros</a>
              <a href="#">Tiendas</a>
              <a href="#">Contacto</a>
              <a href="#">Trabaja con Nosotros</a>
            </div>
            
            <div className={style.linkColumn}>
              <h4>Ayuda</h4>
              <a href="#">Envíos</a>
              <a href="#">Devoluciones</a>
              <a href="#">Guía de Tallas</a>
              <a href="#">FAQ</a>
            </div>
          </div>

          <div className={style.newsletter}>
            <h4>Newsletter</h4>
            <p>Suscríbete para ofertas exclusivas</p>
            <div className={style.newsletterForm}>
              <input type="email" placeholder="tu@email.com" />
              <button>→</button>
            </div>
          </div>
        </div>

        <div className={style.divider}></div>

        <div className={style.bottom}>
          <p className={style.copyright}>© {new Date().getFullYear()} KOA. Todos los derechos reservados.</p>
          
          <div className={style.socials}>
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
          
          <div className={style.legal}>
            <a href="#">Privacidad</a>
            <span>·</span>
            <a href="#">Términos</a>
            <span>·</span>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;