import style from "./Header.module.css";
import NavLink from "../Nav/NavLink/NavLink";
import NavFeature from "../Nav/NavFeature/NavFeature";
import Typography from "@mui/joy/Typography";
import { useAuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

function Header() {
  const { esAdmin } = useAuthContext();

  return (
    <div className={style.nav_header_content}>
      <nav className={style.nav_header}>
        <div className={style.nav_header_title_content}>
          <Typography
            level="h1"
            sx={{ fontFamily: "Lexend, sans-serif", fontWeight: 500 }}
          >
            <Link to="/">KOA</Link>
          </Typography>
        </div>

        <NavLink esAdmin={esAdmin} />
        <NavFeature />
      </nav>
    </div>
  );
}

export default Header;
