import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

const RutaProtegida = ({ children, soloAdmin = false }) => {
  const { usuario, esAdmin } = useAuthContext();

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  if (soloAdmin && !esAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RutaProtegida;