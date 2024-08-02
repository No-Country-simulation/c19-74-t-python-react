import { NavLink } from "react-router-dom";
import NuevoMensaje from "../componentes/boton_redireccion/NuevoMensaje";

const Mensajes = () => {
  return (
    <article className="container_listas">
      <div className="mensaje_cabecera">
        <h2>Mensajes</h2>
        <img src="src\assets\icons\sobre_mensaje.svg" />
      </div>
      <br />
      <section className="contendor_mensajes">
        <Mensaje
          nombre={"Diana Ruiz"}
          materia={"Matemática"}
          n_notificacion={1}
        />
        <Mensaje nombre={"Miguel Ramos"} materia={"Química"} />
        <Mensaje
          nombre={"Gustavo Busquet"}
          materia={"Física"}
          n_notificacion={2}
        />
      </section>
      <NuevoMensaje />
    </article>
  );
};

function Mensaje(prop) {
  return (
    <NavLink to="/conversacion" className="none">
      <article className="container_mensaje">
        <div className="container_description">
          <div>
            <img src="src\assets\icons\perfil_circular.svg" />
          </div>
          <div className="container_nombre">
            <p>{prop.nombre}</p>
            <p>{prop.materia}</p>
          </div>
        </div>
        {console.log(prop.n_notificacion)}
        {prop.n_notificacion !== undefined && (
          <div className="numero_notificacion">{prop.n_notificacion}</div>
        )}
      </article>
    </NavLink>
  );
}

export default Mensajes;
