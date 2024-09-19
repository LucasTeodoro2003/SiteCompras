import Navbar from './navbar/navbar';
import Home from './home/home';
import Produtos from './produtos/produtos';
import Sobre from './sobre/sobre';
import Contato from './contatos/contato';
import Carrinho from './carrinho/carrinho';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CarrinhoProvider } from './carrinho/CarrinhoContext'; 
import './App.css';

function App() {
  return (
    <CarrinhoProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        </div>
      </Router>
    </CarrinhoProvider>
  );
}

export default App;
