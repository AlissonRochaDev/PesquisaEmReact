// Importante Biblioteca para Importação de Estados.
import { useState } from 'react';
// Importando Biblioteca de Icones.
import{ FiSearch } from 'react-icons/fi';
import api from './services/api';
import './css/style.css';

function App() {

  // Inserção da Biblioteca de Estados.
  const [input, setInput] = useState('');

  // Cria um Objeto vazio, porém pronto para receber os dado json da API para renderizar na tela.
  const[cep, setCEP] = useState({});

  // Função do tipo assíncrono para monitorar performance do consumo da API!
  async function handleSearch(){
    // Realizando a requisição da API.
    if(input === ''){
      alert("Digite um CEP!");
      return false;
    }

    try{
      // Esta constante requesita API, com pega o valor digitado no input manda pra API, e a consulta é realizada!
      const response = await api.get(`${input}/json`);
      // console.log(response.data);

      setCEP(response.data);
      setInput("");
    }catch{
      alert("CEP não encontrado!");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="titlePage">Pesquise um CEP!</h1>

      <header className="boxInput">
        <input type="text" placeholder="Digite um CEP..." value={input} onChange={(event) => setInput(event.target.value)}/>
        <button className="btnPesquisar"><FiSearch size={25} color="#ffffff" onClick={handleSearch}/></button>
      </header>

      {/* Só vai executar o main quando houver resultado, se não, nada aparece */}
      {Object.keys(cep).length > 0 && (
        <main className="bodyPage">
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>

          <span>{cep.complemento}</span>

          <span>{cep.bairro}</span>

          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}

    </div>
  );
}

export default App;
