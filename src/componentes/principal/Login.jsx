import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();

  const [campoIdentificacion, setCampoIdentificacion] = useState("");
  const [campoPassword, setCampoPassword] = useState("");
  const [error, setError] = useState("");

  const campoVacio = () => {
    if (
      !campoIdentificacion || campoIdentificacion.trim() === "" ||
      !campoPassword || campoPassword.trim() === ""
    ) {
      setError("Este campo es obligatorio");
    } else {
      setError("");
      navigate("/teachers");
    }
  };

  return (
    <div className="principal">
      <div className="principal__contenedorLogin">
      <Link to="/"><img
          className="contenedorLogin__logo"
          src="./public/media/logo__sf__letrasAzules.png"
          alt="Logo"
        />
        </Link>
        <p className="contenedorLogin__texto titulo">¡Hola!</p>
        <p className="contenedorLogin__texto">
          Accede por primera vez con tus datos
        </p>
        <form className="contenedorLogin__formulario">
          <input
            placeholder="DNI"
            className="contenedorLogin__input"
            type="text"
            name="campoIdentificacion"
            value={campoIdentificacion}
            autoComplete="off"
            onChange={(e) => setCampoIdentificacion(e.target.value)}
            required
          />
          <input
            placeholder="Contraseña"
            className="contenedorLogin__input"
            type="password"
            name="campoPassword"
            value={campoPassword}
            autoComplete="off"
            onChange={(e) => setCampoPassword(e.target.value)}
            required
          />
          {error && <p className="contenedorLogin__error">{error}</p>}
          <button className="contenedorLogin__boton" onClick={campoVacio}>
            Siguiente
          </button>
        </form>
      </div>
    </div>
  );
};
