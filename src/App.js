import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [mili, setMili] = useState(0);
  const [secund, setSecund] = useState(0);
  const [minut, setMinut] = useState(0);

  let milisec;
  useEffect(() => {
    milisec = setInterval(() => {
      setMili(mili + 1);
    }, 10);
    return () => clearInterval(milisec);
  }, [mili]);

  if (mili === 99) {
    setSecund(secund + 1);
    setMili(0);
  }
  if (secund === 59) {
    setSecund(0);
    setMinut(minut + 1);
  }
  return (
    <div className="stopwatch">
      <h1>Timer</h1>
      <span>
        {minut < 10 ? "0" + minut : minut}:{secund < 10 ? "0" + secund : secund}
        ,{mili < 10 ? "0" + mili : mili}
      </span>
      <div className="btn">
        <button
          onClick={() => {
            setMili(0);
            setSecund(0);
            setMinut(0);
          }}
        >
          Restart
        </button>
        <button
          onClick={() => {
            clearInterval(milisec);
          }}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default App;
