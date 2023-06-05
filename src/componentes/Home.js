import LittleTime from "../img/comopossotechamar.png"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState } from "react";
import "./Home.css";

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
    <div>
      <nav>
        <ul>
          <li>
          <Link to="/todo">Todo</Link>
          </li>
          <li>
          <Link to="/pomodoro">Pomodoro</Link>
          </li>
        </ul>
      </nav>
        <h1>TAKE YOUR TIME</h1>
            <p>Olá {nomeEnviado}, sou o Little Time assistente virtual!</p>
            <p>Como posso te chamar?</p>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>

      <img src={LittleTime} alt="imagem inicial" />
    </div>
  );
}

export default Home;