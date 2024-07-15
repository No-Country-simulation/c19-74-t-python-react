import { Header } from "../../componentes/cabecera/Header";
import { useLocation } from "react-router-dom";
import "./home.css";
const Home = () => {
  const { pathname } = useLocation();
  return (
    <main>
      {console.log(pathname)}
      <h2>Welcome to the spider verse</h2>
      <p>aca va contenido</p>
    </main>
  );
};

export default Home;
