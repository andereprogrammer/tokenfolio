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
  const details = [
    {
      label: "Price",
      value: coinDetails?.market_data?.current_price[currency],
    },
    {
      label: "Market Cap",
      value: coinDetails?.market_data?.market_cap[currency],
    },
    { label: "24H High", value: coinDetails?.market_data?.high_24h[currency] },
    { label: "24H Low", value: coinDetails?.market_data?.low_24h[currency] },
    { label: "Crypto Market Rank", value: coinDetails?.market_cap_rank },
  ];
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
          {details.map((detail, index) => (
            <p className="details_listing" key={index}>
              <span>{detail.label}: </span>
              <span>
                {detail.value && index < 4
                  ? `${symbol}${detail.value}`
                  : detail.value}
              </span>
            </p>
          ))}

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
