import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CoinProvider, useCoinContext } from "./hooks/useCoinContext";
import Home from "./pages/home";
import Coin from "./pages/coin";
import Header from "./components/Header";
import Loader from "./components/Loader";

function App() {
  const { loading } = useCoinContext();

  return (
    <div className="App">
      <BrowserRouter>
        <CoinProvider>
          <Header />
          {loading ? <Loader /> : null}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:id" element={<Coin />} />
          </Routes>
        </CoinProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
