import { useState } from "react";
import { NavLink } from "react-router-dom";
const Lista = ({ info }) => {
  // const [open, setOpen] = useState(false);
  console.log(info);
  return (
    <details className="detail_container">
      <summary className="summary_container">
        <h4>{"9a"}</h4>

        <img src="src\assets\icons\flecha_cerrado.svg" />
      </summary>
      <article className="dropdown-menu">
        {info?.map((hijo) => (
          <Alumnos nombre={hijo.nombre} />
        ))}
      </article>
    </details>
  );
};

function Alumnos(prop) {
  return (
    <NavLink to="/estudiante" className="alumno_description">
      {/* <div className="container_description"> */}
      <h3>{prop.nombre}</h3>
      <img src="src\assets\icons\perfil_circular.svg" />
      {/* </div> */}
    </NavLink>
  );
}
export default Lista;

//  <div className="menu-container" ref={menuRef}>
//    <div
//      className="menu-trigger"
//      onClick={() => {
//        setOpen(!open);
//      }}
//    >
//      <img src={user}></img>
//    </div>

//    <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
//      <h3>
//        The Kiet
//        <br />
//        <span>Website Designer</span>
//      </h3>
//      <ul>
//        <DropdownItem img={user} text={"My Profile"} />
//        <DropdownItem img={edit} text={"Edit Profile"} />
//        <DropdownItem img={inbox} text={"Inbox"} />
//        <DropdownItem img={settings} text={"Settings"} />
//        <DropdownItem img={help} text={"Helps"} />
//        <DropdownItem img={logout} text={"Logout"} />
//      </ul>
//    </div>
//  </div>;
