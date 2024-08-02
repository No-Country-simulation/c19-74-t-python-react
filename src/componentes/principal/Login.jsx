import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { catch_email, acces } from "../../redux/actionsCreated";

export const Login = ({ login }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;
    setCredenciales({
      ...credenciales,
      [property]: value,
    });
  }
  console.log(credenciales);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("enviando");
    login(credenciales);

    // console.log(credenciales);
    // dispatch(acces(credenciales));
  }

  // const info = useSelector((state) => state.info);
  // console.log("datos de vuelta");
  // console.log(info);

  const [campoIdentificacion, setCampoIdentificacion] = useState("");
  const [campoPassword, setCampoPassword] = useState("");
  const [error, setError] = useState("");

  const campoVacio = () => {
    if (
      !campoIdentificacion ||
      campoIdentificacion.trim() === "" ||
      !campoPassword ||
      campoPassword.trim() === ""
    ) {
      setError("Este campo es obligatorio");
    } else {
      setError("");
      navigate("/teachers");
      // console.log(campoIdentificacion);
      dispatch(catch_email(campoIdentificacion));
    }
  };
  return (
    <div className="principal">
      <div className="principal__contenedorLogin">
        <Link to="/">
          <img
            className="contenedorLogin__logo"
            src="./public/media/logo__sf__letrasAzules.png"
            alt="Logo"
          />
        </Link>
        <br />
        <br />
        <p className="contenedorLogin__texto titulo">¡Hola!</p>
        <p className="contenedorLogin__texto">
          Accede por primera vez con tus datos
        </p>
        <form onSubmit={handleSubmit} className="contenedorLogin__formulario">
          <input
            className="contenedorLogin__input"
            type="email"
            placeholder="email"
            name="email"
            value={credenciales.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
          <input
            placeholder="Contraseña"
            className="contenedorLogin__input"
            type="password"
            name="password"
            value={credenciales.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
          {error && <p className="contenedorLogin__error">{error}</p>}
          <br />
          <button type="submit" className="contenedorLogin__boton">
            Siguiente
          </button>
        </form>
      </div>
    </div>
  );
};
