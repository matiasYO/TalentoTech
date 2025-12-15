import { Link } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import style from './NavLink.module.css';

function NavLink({ esAdmin }) {
  return (
    <div className={style.nav_header_info_content}>
      <ul className={style.nav_header_info}>
        <Typography level="title-lg">
          <li className={style.nav_header_info_letter}><Link to="/">Inicio</Link></li>
        </Typography>
        <Typography level="title-lg">
          <li className={style.nav_header_info_letter}><Link to="/productos">Productos</Link></li>
        </Typography>

        {esAdmin && (
          <Typography level="title-lg">
            <li className={style.nav_header_info_letter}>
              <Link to="/admin">Admin</Link>
            </li>
          </Typography>
        )}
      </ul>
    </div>
  );
}

export default NavLink;