import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [mili, setMili] = useState(0);
  const [secund, setSecund] = useState(0);
  const [minut, setMinut] = useState(0);
  const [start, setStart] = useState(false);

  let milisec;

  useEffect(() => {
    if (start) {
      milisec = setInterval(() => {
        setMili(mili + 1);
      }, 10);
    }

    return () => clearInterval(milisec);
  }, [mili, start]);

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
            setStart(true);
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            clearInterval(milisec);
            setStart(false);
          }}
        >
          Stop
        </button>
        <button
          onClick={() => {
            setMili(0);
            setSecund(0);
            setMinut(0);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default App;
