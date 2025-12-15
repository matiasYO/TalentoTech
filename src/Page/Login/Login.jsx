import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import styles from "./Login.module.css";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setpassword] = useState("");
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const manejarSubmit = (evento) => {
    evento.preventDefault();

    if (login(usuario, password)) {
      navigate("/");
    } else {
      alert("Usuario o Contraseña inválido");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Iniciar Sesión</h2>

      <form onSubmit={manejarSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="usuario" className={styles.label}>
            Usuario:
          </label>
          <input
            id="usuario"
            name="usuario"
            type="text"
            placeholder="admin"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className={styles.input}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password" className={styles.label}>
            Contraseña:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="1234"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
