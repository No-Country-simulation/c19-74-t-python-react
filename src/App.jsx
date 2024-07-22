import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./componentes/cabecera/Header";
import { Footer } from "./componentes/footer/Footer";
import { CartProvider } from "./context/CartContext";
import "./styles/styles.scss";
import Students from "./componentes/views/Students";
import Parents from "./componentes/views/Parents";
import Teachers from "./componentes/views/Teachers";
import { Login } from "./componentes/principal/Login";
import { NotFound } from "./componentes/NotFound";
import NavBar from "./componentes/nav/NavBar";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/students" element={<Students />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {location.pathname !== "/" && <NavBar />}
      {/* <Footer /> */}
    </>
  );
}

export default App;
