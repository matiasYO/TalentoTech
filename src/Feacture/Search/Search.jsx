import { Typography } from "@mui/joy";
import style from "../Search/Search.module.css"
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
      <div className={style.search_content}>
          <IoSearch className={style.icon_search}/>
          <input type="search"  name="" id="" className={style.bar_search} placeholder="Buscar"/>
      </div>
  )
}

export default Search

