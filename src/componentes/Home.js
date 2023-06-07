import LittleTime from "../img/comopossotechamar.png"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState } from "react";
import "./Home.css";
import Menu from '../menu.js'

function Home() {
   const [nome, setNome] = useState('');
  const [nomeEnviado, setNomeEnviado] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nome enviado:', nome);
    // Aqui você pode fazer algo com o valor do nome, como salvá-lo em algum lugar ou executar uma ação com base nele

    // Limpar o campo de texto após enviar
    setNome('');
    setNomeEnviado(nome);
  };

  return (
    <div className="HomeParag">
      <Menu/>
        <h1 className="inicial">TAKE YOUR TIME</h1>
            <p className="souLittle">Olá {nomeEnviado}, sou o Little Time assistente virtual!</p>
            <p className="comoChamar">Como posso te chamar?</p>
      <form onSubmit={handleSubmit}>
        <label className="Nome">
          Nome:
          <input className="caixaTexto"
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </label>
        <button className="botaoEnviar" type="submit">Enviar</button>
      </form>

      <img src={LittleTime} alt="imagem inicial" />
    </div>
  );
}

export default Home;