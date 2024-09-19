import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useCarrinho } from '../carrinho/CarrinhoContext';

const Navbar: React.FC = () => {
  const { produtos } = useCarrinho();
  const totalItems = produtos.length; 

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">Marketplace</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li>
            <Link to="/carrinho">
              Carrinho {totalItems > 0 && <span className="carrinho-count">({totalItems})</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
