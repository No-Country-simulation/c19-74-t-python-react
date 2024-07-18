import { Link } from "react-router-dom";
import { Home } from "../Home";

const Teachers = () => {
  return (
    <main className="principal">
      <div className="principal__persona">
        <Link to="/">
          <Home />
        </Link>
        <div className="persona__desplegable">
          <p className="desplegable__curso">
            1° D
          </p>
          <img src="./public/media/flecha__desplegable__abajo.png" alt="" className="desplegable__flecha" />
        </div>
        <div className="persona__datos">
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
      </div>
    </main>
  );
};

export default Teachers;
