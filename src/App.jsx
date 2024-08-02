import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Header } from "./componentes/cabecera/Header";
import { Footer } from "./componentes/footer/Footer";

import "./styles/styles.scss";
import Students from "./views/Students";
import Parents from "./views/Parents";
import Teachers from "./views/Teachers";
import { Login } from "./componentes/principal/Login";
import { NotFound } from "./componentes/NotFound";
import NavBar from "./componentes/nav/NavBar";
import Mensajes from "./views/Mensajes";
import Conversacion from "./views/Conversacion";
import Form from "./componentes/informe/Form";
import NewMensaje from "./views/NewMensaje";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
//?
import info from "./data/slack.json";
import { catch_info } from "./redux/actionsCreated";
let data = {};
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [acces, setAcces] = useState(false);

  async function login(credenciales) {
    console.log("pos si pasó");
    const { email, password } = credenciales;
    for (const element of info) {
      if (element.email == email && element.password == password) {
        data = element;
        console.log("aprovado");
        break;
      }
    }

    if (!data.length) {
      console.log(data);
      dispatch(catch_info(data));
      setAcces(true);
      console.log(data.rol);
      acces && navigate(`/${data.rol}`);
    } else {
      console.log("no hay nada ga");
    }
  }
  console.log(acces);
  useEffect(() => {
    !acces && navigate("/");
  }, [acces]);
  return (
    <div className="container_app">
      {location.pathname !== "/" && <Header />}

      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route path="/estudiante" element={<Students />} />
        <Route path="/padre" element={<Parents />} />
        <Route path="/docente" element={<Teachers />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/mensajes" element={<Mensajes />} />
        <Route path="/send" element={<Form />} />
        <Route path="/sendMensaje" element={<NewMensaje />} />

        <Route path="/conversacion" element={<Conversacion />} />
      </Routes>
      {location.pathname !== "/" && <NavBar />}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
