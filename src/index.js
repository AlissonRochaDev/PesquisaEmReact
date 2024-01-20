import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

// Este é um Componente padrão do React para executar no Navegador.
// Aqui ele esta executando um outro Componente chamado App.js.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);