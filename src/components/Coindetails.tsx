import { useCoinContext } from "../hooks/useCoinContext";

function Coindetails() {
  const { coinDetails, setLoading } = useCoinContext();
  if (!coinDetails) {
    setLoading(true);
  } else {
    setLoading(false);
  }
  return (
    <>
      {coinDetails !== undefined || coinDetails !== null ? (
        <div className="flex-column">
          <h1>
            {coinDetails?.name} ({coinDetails?.symbol.toUpperCase()})
          </h1>
          <div style={{ width: 50, height: 50 }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={coinDetails?.image?.thumb}
              alt={coinDetails.name}
            />
          </div>
          <p>Price: ${coinDetails?.market_data?.current_price.usd}</p>
          <p>Market Cap: ${coinDetails?.market_data?.market_cap.usd}</p>
          <p>24H High: ${coinDetails?.market_data?.high_24h.usd}</p>
          <p>24H Low: ${coinDetails?.market_data?.low_24h.usd}</p>
          <p>
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
