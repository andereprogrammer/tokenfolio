import React, { useEffect } from "react";
import "./../styles/listing.css";
import { useCoinContext } from "../hooks/useCoinContext";
import useSearchCoins from "../hooks/useSearchCoins";
import ListingCard from "./ListingCard";

type Props = {};

function Listing({}: Props) {
  const { coins } = useCoinContext();
  const { coinsSearched } = useSearchCoins(coins);

  useEffect(() => {
    console.log("Searched Coins:", coinsSearched);
  }, [coinsSearched]);

  return (
    <div className="listing__">
      <div className="listing__container">
        <div>#</div>
        <div>Coins</div>
        <div>Price</div>
        <div>24H change</div>
        <div>Market cap</div>
      </div>
      <div className="listing__list-container">
        {(coinsSearched.length > 0 ? coinsSearched : coins).map(
          (item, index) => {
            return <ListingCard item={item} index={index} />;
          }
        )}
      </div>
    </div>
  );
}

export default Listing;
