import { Link } from "react-router-dom";
import { Home } from "../componentes/Home";
import Lista from "../componentes/lista/Lista";
import { useSelector } from "react-redux";
const Parents = () => {
  const hijos = useSelector((state) => state.info);
  console.log(hijos.hijos);
  return (
    <main className="container_listas">
      <Lista info={hijos.hijos} />
    </main>
  );
};

export default Parents;
