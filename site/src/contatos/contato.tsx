import React from 'react';
import './contato.css';

const Contato: React.FC = () => {
  return (
    <div className="contato">
      <h2>Contato</h2>
      <form>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" rows={3} required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
