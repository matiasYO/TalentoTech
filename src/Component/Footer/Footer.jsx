import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <h3 className={style.footerLogo}>KOA</h3>

        <div className={style.footerSocials}>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        </div>
      </div>

      <div className={style.footerBottom}>
        <p>© {new Date().getFullYear()} MiTienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
