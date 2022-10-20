import "./App.css";
import { useState } from "react";
import CardAnimal from "./component/cardAnimal";
import CardInfo from "./component/cardInfoAnimal";

function App() {
  const [tipoDoCard, setTipoDoCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoCard === "cachorro") {
      setTipoDoCard("gato");
    } else if (tipoDoCard === "gato") {
      setTipoDoCard("baleia");
    } else if (tipoDoCard === "baleia") {
      setTipoDoCard("lobo");
    } else if (tipoDoCard === "lobo"){
      setTipoDoCard ("aguia")
    }else{
      setTipoDoCard("cachorro")
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1> Card animal</h1>
        </div>
          <CardAnimal tipoAnimal={tipoDoCard} />
          <CardInfo tipoAnimal={tipoDoCard} />

        <button onClick={alterarState}>próximo animal</button>
      </div>
    </div>
  );
}

export default App;
