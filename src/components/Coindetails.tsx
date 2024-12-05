import { useCoinContext } from "../hooks/useCoinContext";
import LineChart from "./LineChart";
import { currencySymbols } from "./ListingCard";

function Coindetails() {
  const { coinDetails, setLoading, currency } = useCoinContext();
  if (!coinDetails) {
    setLoading(true);
  } else {
    setLoading(false);
  }
  const symbol = currencySymbols[currency] || currency;
  return (
    <>
      {coinDetails !== undefined || coinDetails !== null ? (
        <div className="flex-column">
          <h1>
            {coinDetails?.name} ({coinDetails?.symbol.toUpperCase()})
          </h1>
          <div style={{ width: 100, height: 100, objectFit: "contain" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={coinDetails?.image?.large}
              alt={coinDetails.name}
            />
          </div>
          <LineChart />

          <p className="details_listing">
            <span>Price: </span>
            <span>
              {symbol}
              {coinDetails?.market_data?.current_price[currency]}
            </span>
          </p>
          <p className="details_listing">
            <span>Market Cap: </span>
            <span>
              {symbol}
              {coinDetails?.market_data?.market_cap[currency]}
            </span>
          </p>
          <p className="details_listing">
            <span>24H High: </span>
            <span>
              {symbol}
              {coinDetails?.market_data?.high_24h[currency]}
            </span>
          </p>
          <p className="details_listing">
            <span>24H Low:</span>{" "}
            <span>
              {symbol}
              {coinDetails?.market_data?.low_24h[currency]}
            </span>
          </p>
          <p className="details_listing">
            <span>Crypto Market rank : </span>
            <span>{coinDetails.market_cap_rank}</span>
          </p>
          <p className="details_listing">
            <p>Website: </p>
            <a
              href={coinDetails?.links?.homepage[0]}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              {coinDetails.id}
            </a>
          </p>
        </div>
      ) : null}
    </>
  );
}

export default Coindetails;
