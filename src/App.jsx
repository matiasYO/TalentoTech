import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header"
import Index from "./Page/Index/Index"
import Productos from "./Page/Productos/Productos";
import Carrito from "./Page/carrito/carrito";
import ProductoDetalle from "./Page/ProductosDetalle/ProductoDetalle";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
    <div className="container">
        <Header/>
        
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="productos" element={<Productos/>} />
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/productos/:id' element={<ProductoDetalle/>}/>
        </Routes>
        
        <Footer/>
        
    </div>
    </>
  )
}

export default App
