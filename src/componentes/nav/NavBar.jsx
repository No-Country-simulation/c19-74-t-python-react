import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="container-nab">
      <NavLink to="/estudiante">
        <button>
          <img src="src\assets\icons\notas.svg" alt="notas" />
        </button>
      </NavLink>
      <NavLink>
        <button>
          <img src="src\assets\icons\agenda.svg" alt="agenda" />
        </button>
      </NavLink>
      <NavLink to="/mensajes">
        <button>
          <img src="src\assets\icons\mensajes.svg" alt="mensajes" />
        </button>
      </NavLink>
      <NavLink>
        <button>
          <img src="src\assets\icons\avisos.svg" alt="perfil" />
        </button>
      </NavLink>
    </div>
  );
};

export default NavBar;
