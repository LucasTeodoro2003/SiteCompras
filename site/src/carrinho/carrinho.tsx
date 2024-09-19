import React from 'react';
import './carrinho.css';
import { useCarrinho } from './CarrinhoContext';

const Carrinho: React.FC = () => {
  const { produtos, limparCarrinho } = useCarrinho();

  const handleFinalizarCompra = () => {
    alert('Compra finalizada!');
    limparCarrinho();
  };

  const calcularTotal = () => {
    return produtos.reduce((total, produto) => total + parseFloat(produto.preco), 0).toFixed(2);
  };

  return (
    <div className="carrinho-container">
      <h1>Carrinho de Compras</h1>
      {produtos.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div className="produtos-lista">
          {produtos.map(produto => (
            <div key={produto.id} className="carrinho-produto">
              <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
              <div className="produto-info">
                <h3>{produto.nome}</h3>
                <p>Preço: R$ {produto.preco}</p>
              </div>
            </div>
          ))}
          <div className="resumo-carrinho">
            <h2>Total: R$ {calcularTotal()}</h2>
            <button onClick={handleFinalizarCompra} className="finalizar-compra">
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrinho;
