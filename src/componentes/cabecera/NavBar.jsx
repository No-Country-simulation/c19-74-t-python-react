import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav className="cabecera__nav">
      <div className="nav__listado">
        <NavLink to="/students" className="listado__items">
          Alumnos
        </NavLink>
        <NavLink to="/teachers" className="listado__items">
          Profesores
        </NavLink>
        <NavLink to="/parents" className="listado__items">
          Padres
        </NavLink>
      </div>
    </nav>
  );
};
