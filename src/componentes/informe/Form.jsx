import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Form = () => {
  const [informe, setInforme] = useState({
    email_maestro: "",
    email_alumno: "",
    email_padre: "",
    titulo: "",
    nota: "",
    mensaje: "",
  });
  const user_email = useSelector((state) => state.user_email);
  console.log("from-formulario: " + user_email);
  const handleChange = (event) => {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;
    setInforme({
      ...informe,
      [property]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("enviando");
    const info = {
      email_maestro: informe.email_maestro,
      email_alumno: informe.email_alumno,
      email_padre: informe.email_padre,
      titulo: informe.titulo,
      nota: informe.nota,
      feedback: {
        autor: "Sr.Adrian",
        mensaje: informe.mensaje,
      },
    };
    // console.log(info);
    window.alert("enviado");
    setInforme({
      email_maestro: " ",
      email_alumno: " ",
      email_padre: " ",
      titulo: "",
      nota: "",
      mensaje: "",
    });
  };
  return (
    <article className="principal">
      <h2 className="letra_verde">Añadir nueva calificación</h2>
      <form onSubmit={handleSubmit} className="form_style">
        {/* {console.log(informe)} */}
        {/* <input
          type="email"
          name="email_maestro"
          value={informe.correo_maestro}
          placeholder="email_maestro"
          onChange={handleChange}
        /> */}

        {/* <input
          type="email"
          name="email_alumno"
          value={informe.correo_alumno}
          placeholder="email_alumno"
          required
          onChange={handleChange}
        /> */}

        {/* <input
          type="email"
          name="email_padre"
          value={informe.correo_padre}
          placeholder="email_padre"
          onChange={handleChange}
        /> */}
        {/* <div>
          <input
            type="text"
            name="titulo"
            value={informe.titulo}
            placeholder="Titulo"
            onChange={handleChange}
            className="input_style"
          />
          <br />
          <span className="letra_negro">identificar la evaluación</span>
        </div> */}
        <div>
          <input
            type="number"
            name="nota"
            value={informe.nota}
            placeholder="Nota"
            required
            onChange={handleChange}
            className="input_style"
          />
          <br />
          <span className="letra_negro">
            ingresa una nota numérica del 1 al 10
          </span>
        </div>
        <div>
          <input
            type="text"
            name="mensaje"
            value={informe.mensaje}
            placeholder="Comentario"
            onChange={handleChange}
            className="input_style comentario"
          />
          <br />
          <span className="letra_negro">
            ingresa una devolución para que lea el alumno y su adulto
            responsable
          </span>
        </div>
        <div className="container_boton">
          <button type="submit" className="boton_formulario letra_blanca">
            Guardar
          </button>
          <button className="boton_formulario bg_verde_claro letra_blanca">
            Finalizar trimestre
          </button>
        </div>
      </form>
    </article>
  );
};

export default Form;
