import { useParams } from "react-router-dom";
import LineChart from "../components/LineChart";
import { useCoinContext } from "../hooks/useCoinContext";
import { useEffect } from "react";
import Coindetails from "../components/Coindetails";
import "./../styles/coindetails.css";

function Coin() {
  const { id } = useParams();
  const { setCoinId } = useCoinContext();
  useEffect(() => {
    if (id) {
      setCoinId(id);
    }
  }, []);
  return (
    <div className="coin_page__container">
      <LineChart />
      <Coindetails />
    </div>
  );
}

export default Coin;
