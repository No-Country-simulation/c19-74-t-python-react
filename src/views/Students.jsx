import { Link } from "react-router-dom";
import { Home } from "../componentes/Home";

import { useSelector } from "react-redux";
import asistencia from "../assets/icons/asistencia.svg";
import menajes from "../assets/icons/sobre_mensaje.svg";
import NuevaCalificacion from "../componentes/boton_redireccion/NuevaCalificacion";
const Students = () => {
  const info = useSelector((state) => state.info);
  console.log(info);

  if (info == undefined) {
    console.log("ni idea que pasa");
  } else {
    return (
      <main className="container_listas">
        <section className="cabecera_alumno">
          <PAlumno
            nombre={`${info.nombre} ${info.apellido}`}
            grado={info.seccion}
          />
        </section>
        <section className="contenedor_cajas">
          <Box_info
            img={asistencia}
            text={"Asistencias"}
            info={info.asistencia}
          />
          <Box_info img={menajes} text={"Mensajes"} info={info.mensajes} />
        </section>
        <section className="container_calificaciones">
          <h3 className="letra_blanca">calificaciones</h3>
          <section className="momentaneo">
            {info.materias?.map((materia) => (
              <Desplegable materia={materia} />
            ))}
          </section>
        </section>
        {info.rol === "docente" && <NuevaCalificacion />}
      </main>
    );
  }
};

function PAlumno(props) {
  return (
    <article className="nombre_alumno">
      <div className="alineacion">
        <h3 className="letra_blanca">{props.nombre}</h3>
        <div className="grado">
          <img src="src\assets\icons\toga.svg" />
          <h4>{props.grado}</h4>
        </div>
      </div>
      <img src="src\assets\icons\perfil_circular.svg" />
    </article>
  );
}

function Box_info(props) {
  return (
    <article className="caja_informativa">
      <img src={props.img} className="tamaño_img" />
      <div>
        <p>{props.text}</p>
        <p>{props.info}</p>
      </div>
    </article>
  );
}

function Desplegable({ materia }) {
  console.log("despleagable");
  console.log(materia);
  return (
    <details className="detail_container">
      <summary className="summary_container">
        <h4>{materia.materia}</h4>
        <img src="src\assets\icons\flecha_cerrado.svg" />
      </summary>
      <article className="dropdown-menu">
        <section className="container_semestres">
          {materia.trimestres?.map((semestre) => (
            <Semenstres semestre={semestre} />
          ))}

          <div className="promedio_tri">
            <p>promedio anual:</p>
            <p className="mini_box">{materia.nota}</p>
          </div>
        </section>
      </article>
    </details>
  );
}

function Semenstres({ semestre }) {
  return (
    <details className="contenedor_semestre">
      <br />
      <summary className="estilo_cursor">{semestre.trimestre}</summary>
      <article className="arcticle_semestre">
        <article className="ordenando_info_notas">
          <p>Notas:</p>
          <div className="caja_notas">
            {semestre.notas?.map((nota) => (
              <CajaNotas nota={nota} />
            ))}
          </div>
        </article>
        <article className="promedio_tri">
          <div>
            <p>Promedio trimestral</p>
          </div>
          <div>
            <CajaNotas nota={8} />
          </div>
        </article>
      </article>
    </details>
  );
}

function CajaNotas({ nota }) {
  return (
    <div className="mini_box">
      <p>{nota}</p>
    </div>
  );
}

export default Students;
