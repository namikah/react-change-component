import { useEffect, useState } from "react";
import "./App.css";
import One from "./Components/One";
import Two from "./Components/Two";

function App() {
  const [state, setState] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {state? <One/> : <Two />}
        <button
          className="btn btn-primary"
          onClick={() => setState(!state)}
        >
          Click to change
        </button>
      </header>
    </div>
  );
}

export default App;
