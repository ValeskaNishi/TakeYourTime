import LittleTime from "../img/comopossotechamar.png"
import { useState } from "react";

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