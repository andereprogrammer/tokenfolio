import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CoinProvider } from "./hooks/useCoinContext";
import Home from "./pages/home";
import Coin from "./pages/coin";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <CoinProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:id" element={<Coin />} />
          </Routes>
        </BrowserRouter>
      </CoinProvider>
    </div>
  );
}

export default App;
