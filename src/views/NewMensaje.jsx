import lupa from "../assets/icons/lupa.svg";
import send from "../assets/icons/send.svg";
import { useState } from "react";
const NewMensaje = () => {
  const [enviar, setEnviar] = useState({
    email_origen: "",
    email_destinatario: "",
    mensaje: "",
  });
  function handleChange(event) {
    event.preventDefault();
  }
  return (
    <div className="container_listas">
      <h2>Nuevo Mensaje</h2>
      <br />
      <article className="container_inputs">
        <div className="mensaje_input">
          <input
            type="text"
            placeholder="Ingrese el destinatario"
            name="email_destinatario"
            value={enviar.email_destinatario}
          />
          <img src={lupa} className="icono" />
        </div>
        <div className="mensaje_input ">
          <input
            type="text"
            placeholder="Escribe tu mensaje"
            name="mensaje"
            value={enviar.mensaje}
          />
          <img src={send} className="icono" />
        </div>
      </article>
    </div>
  );
};

export default NewMensaje;
