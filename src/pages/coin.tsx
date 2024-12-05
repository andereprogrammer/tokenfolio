import { Link, useParams } from "react-router-dom";
import LineChart from "../components/LineChart";
import { useCoinContext } from "../hooks/useCoinContext";
import { useEffect } from "react";
import Coindetails from "../components/Coindetails";
import "./../styles/coindetails.css";
import Loader from "../components/Loader";

function Coin() {
  const { id } = useParams();
  const { setCoinId, loading } = useCoinContext();

  useEffect(() => {
    if (id) {
      setCoinId(id);
    }
  }, []);
  return (
    <div className="coin_page__container">
      {loading ? <Loader /> : null}
      <Link to={"/"} className="go-back">
        Go back
      </Link>
      <Coindetails />
    </div>
  );
}

export default Coin;
