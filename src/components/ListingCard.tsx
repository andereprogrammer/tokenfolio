import React from "react";
import { Coin, useCoinContext } from "../hooks/useCoinContext";

type Props = {
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

function ListingCard({ item, index }: Props) {
  const { currency } = useCoinContext();

  const symbol = currencySymbols[currency] || currency;

  return (
    <div className="listing__card" key={item.id || index}>
      <div>{index + 1}</div>
      <div className="listing__image-container">
        <img
          width={"100%"}
          height={"100%"}
          src={item.image}
          alt={item.name || "coin"}
        />
      </div>
      <div>
        {symbol} {item.current_price?.toLocaleString() || "N/A"}
      </div>
      <div className="listing__item-24h">
        <p>
          {item.price_change_percentage_24h !== undefined
            ? (
                Math.floor(parseInt(item.price_change_percentage_24h) * 100) /
                100
              ).toFixed(2)
            : "N/A"}
        </p>
        <p>{symbol}</p>
      </div>
      <div>
        {symbol} {item.market_cap?.toLocaleString() || "N/A"}
      </div>
    </div>
  );
}

export default ListingCard;
