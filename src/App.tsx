import "./App.css";
import { CoinProvider } from "./hooks/useCoinContext";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <CoinProvider>
        <Home />
      </CoinProvider>
    </div>
  );
}

export default App;
