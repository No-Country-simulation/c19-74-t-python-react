import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './componentes/cabecera/Header';
import { Footer } from './componentes/footer/Footer';
import { Main } from './componentes/principal/Main';
import { CartProvider } from './context/CartContext';
import './styles/styles.scss';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
