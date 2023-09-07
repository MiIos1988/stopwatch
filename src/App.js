import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [mil, setMil] = useState(0);
  const [secund, setSecund] = useState(0);
  const [minute, setMinute] = useState(0);
  const [start, setStart] = useState(false);

  
  let milSec;
  useEffect(() => {
    if (start) {
      milSec = setInterval(() => {
        setMil(mil + 1);
      }, 10);
    }

    return () => clearInterval(milSec);
  }, [mil, start]);

  if (mil === 99) {
    setSecund(secund + 1);
    setMil(0);
  }
  if (secund === 59) {
    setSecund(0);
    setMinute(minute + 1);
  }
  return (
    <div className="stopwatch">
      <h1>Timer</h1>
      <span>
        {minute < 10 ? "0" + minute : minute}:{secund < 10 ? "0" + secund : secund}
        ,{mil < 10 ? "0" + mil : mil}
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
            clearInterval(milSec);
            setStart(false);
          }}
        >
          Stop
        </button>
        <button
          onClick={() => {
            setMil(0);
            setSecund(0);
            setMinute(0);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default App;
