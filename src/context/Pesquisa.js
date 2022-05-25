import React from 'react';
import { createContext } from 'react';
export const PesquisaContext = createContext();

// eslint-disable-next-line react/prop-types
export const PesquisaProvider = ({ children }) => {
  const [busca, setBusca] = React.useState('');

  return (
    <PesquisaContext.Provider value={{ busca, setBusca }}>
      {children}
    </PesquisaContext.Provider>
  );
};
