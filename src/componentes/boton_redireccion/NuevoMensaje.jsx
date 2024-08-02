import { NavLink } from "react-router-dom";
const NuevoMensaje = () => {
  return (
    <NavLink to="/sendMensaje" className="new_botonRedireccion">
      <img src="src\assets\icons\lapiz.svg" />
      <p>Nuevo mensaje</p>
    </NavLink>
  );
};

export default NuevoMensaje;
