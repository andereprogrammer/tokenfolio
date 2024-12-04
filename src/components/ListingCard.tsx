import { Link } from "react-router-dom";
import { Coin, useCoinContext } from "../hooks/useCoinContext";

type ListingCardProps = {
  item: Coin;
  index: number;
};
export const currencySymbols: { [key: string]: string } = {
  usd: "$",
  eur: "€",
  inr: "₹",
  gbp: "£",
  jpy: "¥",
  aud: "A$",
  chf: "CHF",
  cad: "C$",
};

function ListingCard({ item, index }: ListingCardProps) {
  const { currency } = useCoinContext();

  const symbol = currencySymbols[currency] || currency;

  return (
    <Link
      to={`/coin/${item.id}`}
      role="row"
      aria-labelledby={`crypto-${index}`}
      className="listing__card"
      key={item.id || index}
    >
      <div className="mobile horizontal">
        <div className="listing__image-container">
          <img
            width={"100%"}
            height={"100%"}
            src={item.image}
            alt={item.name || "coin"}
          />
        </div>
        <div className="">
          {item.name} <br />
          {item.symbol}
        </div>
      </div>
      <div className="listing__image-container desktop">
        <img
          width={"100%"}
          height={"100%"}
          src={item.image}
          alt={item.name || "coin"}
        />
      </div>
      <div className="desktop">
        {item.name} <br />
        {item.symbol}
      </div>
      <div className="mobile">
        <div className="mobile-left">
          {symbol} {item.current_price?.toLocaleString() || "N/A"}
        </div>
        <div
          aria-label="24H Change"
          className={`listing__item-24h mobile-left flex-row${
            parseInt(item.price_change_percentage_24h) < 0 ? "negative" : ""
          }`}
        >
          <p>{symbol}</p>
          <p>
            {item.price_change_percentage_24h !== undefined
              ? (
                  Math.floor(parseInt(item.price_change_percentage_24h) * 100) /
                  100
                ).toFixed(2)
              : "N/A"}
          </p>
        </div>
      </div>

      <div className="desktop">
        {symbol} {item.current_price?.toLocaleString() || "N/A"}
      </div>
      <div
        aria-label="24H Change"
        className={`listing__item-24h desktop${
          parseInt(item.price_change_percentage_24h) < 0 ? "negative" : ""
        }`}
      >
        <p>{symbol}</p>
        <p>
          {item.price_change_percentage_24h !== undefined
            ? (
                Math.floor(parseInt(item.price_change_percentage_24h) * 100) /
                100
              ).toFixed(2)
            : "N/A"}
        </p>
      </div>
      <div className="desktop">
        {symbol} {item.market_cap.toPrecision(5) || "N/A"}
      </div>
    </Link>
  );
}

export default ListingCard;
