import { Link } from "react-router-dom";
import { Home } from "../componentes/Home";
// import Form from "../informe/Form";
import Lista from "../componentes/lista/Lista";
import info from "../data/alumnos.json";
import { useSelector } from "react-redux";
import NuevaCalificacion from "../componentes/boton_redireccion/NuevaCalificacion";
const Teachers = () => {
  const grados = useSelector((state) => state.info);
  console.log(grados);
  return (
    <main className="container_listas">
      <h2>Asignados</h2>

      <Lista info={info} />
      <Lista />
      {/* <NuevaCalificacion /> */}
    </main>
  );
};

export default Teachers;
