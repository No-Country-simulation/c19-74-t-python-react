import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./componentes/cabecera/Header";
import { Footer } from "./componentes/footer/Footer";
import { Main } from "./componentes/principal/Main";
import { CartProvider } from "./context/CartContext";
import "./styles/styles.scss";
import Home from "./views/home/Home";
import Students from "./views/students/Students";
import Parents from "./views/parents/Parents";
import Teachers from "./views/teachers/Teachers";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
