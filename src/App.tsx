import { useCounter } from "./hooks/useCounter";
import "./App.css";
import { PokemonDashboard } from "./components/pokemon/PokemonDashboard";

function App() {
  const { count, increment } = useCounter();

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={increment}>
            count is: {count}
          </button>
        </p>
      </header>
      <PokemonDashboard />
    </div>
  );
  s;
}

export default App;
