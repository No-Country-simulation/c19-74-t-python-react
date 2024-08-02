import { NavLink } from "react-router-dom";
const NuevaCalificacion = () => {
  return (
    <NavLink to="/send" className="new_botonRedireccion">
      <img src="src\assets\icons\+.svg" />
      <p>Nueva Calificación</p>
    </NavLink>
  );
};

export default NuevaCalificacion;
