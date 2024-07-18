import { Link } from "react-router-dom";
import { Home } from "../Home";

const Students = () => {
  return (
    <main className="principal">
      <div className="principal__persona">
        <Link to="/">
          <Home />
        </Link>
        <div className="visible persona__datos">
          <img className="datos__imagenAlumno" src="./public/media/silueta.png" />
          <div className="datos__contenedorAlumno">
            <p className="contenedorAlumno__nombre">
              Rodrigo
            </p>
            <div>
              🎓
              1°D
            </div>
          </div>
        </div>
        <div className="persona__calificaciones">
          <p className="calificaciones__texto">Calificaciones</p>
          <div className="calificaciones__desplegable">
            <p className="desplegable__materia">
              Matemáticas
            </p>
            <img className="desplegable__flecha" src="./public/media/flecha__desplegable__abajo.png" alt="flecha abajo" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Students;
