import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Watch from "./components/Watch/Watch";
import Knob from "./components/Knob/Knob";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Knob steps="456"></Knob>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Watch></Watch>
    </div>
  );
}

export default App;
