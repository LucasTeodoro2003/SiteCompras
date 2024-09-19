import React from 'react';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="header">
        <img src="./logo.png" alt="Logo" className="logo" />
        <h1>Marketplace</h1>
        <p>As melhores ofertas, todos os dias!</p>
      </header>

      <section className="welcome-section">
        <h2>Bem-vindo ao nosso Marketplace!</h2>
        <p>Aqui você encontra uma variedade de produtos de alta qualidade, com as melhores ofertas do mercado.</p>
        <p>Explore nossas categorias e aproveite as promoções!</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Marketplace. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
