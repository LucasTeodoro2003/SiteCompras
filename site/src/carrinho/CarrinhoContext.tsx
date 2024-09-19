// src/carrinho/CarrinhoContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface Produto {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
}

interface CarrinhoContextType {
  produtos: Produto[];
  adicionarAoCarrinho: (produto: Produto) => void;
  limparCarrinho: () => void;
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export const CarrinhoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const adicionarAoCarrinho = (produto: Produto) => {
    setProdutos((prevProdutos) => [...prevProdutos, produto]);
  };

  const limparCarrinho = () => {
    setProdutos([]);
  };

  return (
    <CarrinhoContext.Provider value={{ produtos, adicionarAoCarrinho, limparCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCarrinho must be used within a CarrinhoProvider');
  }
  return context;
};
