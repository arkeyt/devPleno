import React, { useState, useEffect } from "react";
import MostraVoltas from "./MostrarVoltas";
import MostrarTempo from "./MostrarTempo";
import Button from "./Button";
import "./App.css";

function App() {
  const [numVoltas, setNumVoltas] = useState(14);
  const [running, setRunning] = useState(false);
  const [tempo, setTempo] = useState(0);

  const toglleRunning = () => {
    setRunning(!running);
  };

  const increment = () => {
    setNumVoltas(numVoltas + 1);
  };

  const decrement = () => {
    setNumVoltas(numVoltas - 1);
  };

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setTempo((old) => old + 1);
      }, 1000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running]);

  return (
    <div className="App">
      <MostraVoltas voltas={numVoltas} />
      <Button text="+" onClick={increment} />
      <Button text="-" onClick={decrement} /> <br />
      {numVoltas > 0 && <MostrarTempo tempo={Math.round(tempo / numVoltas)} />}
      <Button text="Iniciar" onClick={toglleRunning} />
      <Button text="Reiniciar" />
    </div>
  );
}

export default App;
