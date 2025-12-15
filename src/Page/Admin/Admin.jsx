import GestionProductos from "../../Component/GestionProductos/GestionProductos";

const Admin = () => {
  
  const API = import.meta.env.VITE_API_URL;

  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
      if (!respuesta.ok) throw new Error("Error al agregar el producto.");
      const dato = await respuesta.json();
      console.log("Producto agregado: ", dato);
      alert("Producto agregado correctamente");
    } catch (error) {
      console.error(error.message);
      alert("Hubo un problema al agregar el producto.");
    }
  };

  return (
    <div>
      <GestionProductos/>
    </div>
  );
};

export default Admin;