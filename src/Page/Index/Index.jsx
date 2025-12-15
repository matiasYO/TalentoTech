import { useState, useEffect } from "react";
import style from "./Index.module.css";
import Typography from "@mui/joy/Typography";
import { SlArrowDown } from "react-icons/sl";
import Carrousel from "../../component/Carrousel/Carrousel.jsx";

function Index() {
  const [loading, setLoading] = useState(true);

  // LOADER
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={style.loader}>
        <h1 className={style.loader_text}>DESIGNED TO MOVE</h1>
        <div className={style.loader_bar}></div>
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <div className={style.main_index_content}>
        <div className={style.main_letters}>
          <Typography
            level="title-lg"
            sx={{ fontSize: 140, letterSpacing: "0.6rem" }}
          >
            Welcome.
          </Typography>

          <Typography
            level="body-lg"
            sx={{ fontSize: 18, lineHeight: 1.6, opacity: 0.75 }}
          >
            Diseño limpio, comodidad diaria y materiales hechos para seguir tu ritmo.
          </Typography>

          <div className={style.main_scroll_button}>
            <a href="#info">
              <button className={style.scroll_button}>
                <SlArrowDown className={style.scroll} />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className={style.WhiteScreen}></div>
      <Carrousel />

      <div className={style.section_text_information_content}>
        <div className={style.section_text_information}>
          <Typography
            level="title-lg"
            sx={{ fontSize: 120, letterSpacing: "0.4rem" }}
          >
            Nuestra filosofía
          </Typography>

          <Typography
            level="body-lg"
            sx={{ fontSize: 18, lineHeight: 1.6, opacity: 0.75 }}
          >
            Diseñamos productos centrados en el equilibrio, la simplicidad y la comodidad. Sin ruidos ni excesos: justo lo que necesitas para moverte con libertad.
          </Typography>
        </div>
      </div>

      <div className={style.section_info} id="info">
        <div className={style.section_info_item}>
          <h3>MOVE</h3>
          <p>Diseñado para un movimiento natural.</p>
        </div>

        <div className={style.section_info_item}>
          <h3>COMFORT</h3>
          <p>Materiales suaves, sensación durante todo el día.</p>
        </div>

        <div className={style.section_info_item}>
          <h3>STYLE</h3>
          <p>Limpio, minimalista y atemporal.</p>
        </div>

        <div className={style.section_info_item}>
          <h3>BALANCE</h3>
          <p>Función y diseño en armonía.</p>
        </div>
      </div>
    </>
  );
}

export default Index;
