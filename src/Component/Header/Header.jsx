import style from "./Header.module.css"
import Typography from '@mui/joy/Typography'
import Search from "../../Feacture/Search/Search";
import Carry from "../../Feacture/Carry/Carry";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.nav_header_content}>
        <nav className={style.nav_header}>
            <div className={style.nav_header_title_content}>
                <Typography level="h1" sx={{ fontFamily: 'Lexend, sans-serif', fontWeight: 500, fontStyle: 'normal'}}><Link to= '/'>KOA</Link></Typography>          
            </div>

            <div className={style.nav_header_info_content}>
                <ul className={style.nav_header_info}>
                 <Typography level="title-lg"><li className={style.nav_header_info_letter}><Link to= '/'>Inicio </Link></li> </Typography>
                 <Typography level="title-lg"><li className={style.nav_header_info_letter}><Link to= 'productos'>Productos </Link></li></Typography>
                 <Typography level="title-lg"><li className={style.nav_header_info_letter}>Beneficios </li> </Typography>
                 <Typography level="title-lg"><li className={style.nav_header_info_letter}>Contactos </li> </Typography>
                </ul>
            </div>

            <div className={style.nav_header_feacture_content}>
                <div className={style.nav_header_feacture}>
                 <Search/>
                 <Link to= 'carrito'><Carry/></Link>
                </div>  
            </div>
        </nav>
    </div>
  )
}

export default Header