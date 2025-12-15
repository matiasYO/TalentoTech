import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header"
import Index from "./Page/Index/Index"
import Productos from "./Page/Productos/Productos";
import Carrito from "./Page/carrito/carrito";
import ProductoDetalle from "./Page/ProductosDetalle/ProductoDetalle";
import RutaProtegida from "./Component/RutaProtegida/RutaProtegida"
import Footer from "./Component/Footer/Footer";
import Login from "./Page/login/login";
import Admin from "./Page/admin/Admin";
import ResultadosSearch from "./Feacture/Search/ResultadosSearch";
function App() {
  return (
    <>
    <div className="container">
        <Header/>
        
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="productos" element={<Productos/>} />
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/busqueda' element={<ResultadosSearch/>}/>
          <Route path="/Login" element={<Login/>} />
          <Route path='/productos/:id' element={<ProductoDetalle/>}/>
          <Route path="/admin" element={
                <RutaProtegida >
                  <Admin />
                </RutaProtegida>}/>
        </Routes>
        
        <Footer/>
        
    </div>
    </>
  )
}

export default App



