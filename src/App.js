import { useEffect, useState } from "react";
import "./App.css";
import One from "./Components/One";
import Two from "./Components/Two";

function App() {
  const [state, setState] = useState();

  useEffect(() => {
    setState(false);
  }, []);

  const changeComponent = (state) => {
    if (state) return <Two />;
    else return <One />;
  };

  return (
    <div className="App">
      <header className="App-header">
        {changeComponent(state)}
        <button
          className="btn btn-primary"
          onClick={() => (state ? setState(false) : setState(true))}
        >
          Click to change
        </button>
      </header>
    </div>
  );
}

export default App;
