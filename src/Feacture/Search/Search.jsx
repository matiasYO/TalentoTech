import { useSearch } from "../../Context/SearchContext"
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import style from "../Search/Search.module.css";

const Search = () => {
  const { busqueda, setBusqueda } = useSearch();
  const navigate = useNavigate();

  const manejarBusqueda = (evento) => {
    const valor = evento.target.value;
    setBusqueda(valor);

    if (valor.trim()) {
      navigate("/busqueda");
    }
  };

  const manejarSubmit = (evento) => {
    evento.preventDefault();
    if (busqueda.trim()) {
      navigate("/busqueda");
    }
  };

  return (
    <form onSubmit={manejarSubmit} className={style.search_content}>
      <IoSearch className={style.icon_search} />
      <input
        type="search"
        className={style.bar_search}
        placeholder="Buscar Productos..."
        value={busqueda}
        onChange={manejarBusqueda}
      />
    </form>
  );
};

export default Search;
