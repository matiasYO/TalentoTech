import { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState("");

  return (
    <SearchContext.Provider value={{ busqueda, setBusqueda }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
