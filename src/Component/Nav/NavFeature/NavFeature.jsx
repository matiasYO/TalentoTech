import { Link } from "react-router-dom";
import Search from "../../../Feature/Search/Search";
import Carry from "../../../Feature/Carry/Carry";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { useAuthContext } from "../../../Context/AuthContext";
import style from "./NavFeature.module.css";

function NavFeature() {
  const { usuario, logout } = useAuthContext();
  const estaLogeado = !!usuario;

  return (
    <div className={style.nav_header_feature_content}>
      <div className={style.nav_header_feature}>
        <Search />

        <Link to="/carrito">
          <Carry />
        </Link>

        {estaLogeado ? (
          <button
            className={style.logoutBtn}
            onClick={logout}
            title="Cerrar sesión"
          >
            <FaSignOutAlt />
          </button>
        ) : (
          <Link to="/login">
            <FaUserAlt className={style.nav_header_feature_icon} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavFeature;
