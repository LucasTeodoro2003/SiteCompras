import React from 'react';
import './sobre.css'; // Importando o CSS

const Sobre: React.FC = () => {
  return (
    <div className="sobre">
      <h1>Sobre Nós</h1>
      <p>
        Bem-vindo à nossa loja! Nós somos apaixonados por moda e calçados, oferecendo uma seleção de produtos de alta qualidade que atendem a todos os estilos e orçamentos.
      </p>
      <h2>Nossa História</h2>
      <p>
        Fundada em 2024, nossa loja nasceu do desejo de proporcionar aos nossos clientes uma experiência de compra excepcional. Com uma equipe dedicada, trabalhamos todos os dias para trazer as últimas tendências e os melhores produtos do mercado.
      </p>
      <h2>Nossa Missão</h2>
      <p>
        Nossa missão é oferecer moda acessível e de qualidade, garantindo a satisfação total de nossos clientes. Acreditamos que todos merecem se sentir bem com o que vestem.
      </p>
      <h2>Contato</h2>
      <p>
        Se você tiver alguma dúvida ou sugestão, não hesite em nos contatar:
      </p>
      <ul>
        <li><strong>Email:</strong> contato@minhalSoja.com.br</li>
        <li><strong>Telefone:</strong> (11) 1234-5678</li>
      </ul>
      <h2>Redes Sociais</h2>
      <p>
        Siga-nos nas redes sociais para ficar por dentro das novidades:
      </p>
      <ul>
        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
      </ul>
    </div>
  );
}

export default Sobre;
