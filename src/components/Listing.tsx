import "./../styles/listing.css";
import { useCoinContext } from "../hooks/useCoinContext";
import useSearchCoins from "../hooks/useSearchCoins";
import ListingCard from "./ListingCard";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Listing() {
  const { coins, searchQuery } = useCoinContext();
  const { coinsSearched } = useSearchCoins(coins);
  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <div className="listing__">
      <div
        role="row"
        aria-label="Crypto Listing Header"
        className="listing__container"
      >
        <div>#</div>
        <div>Name</div>
        <div>Price</div>
        <div>24H change</div>
        <div>Market cap</div>
      </div>
      <div className="listing__list-container">
        {(searchQuery.length > 0 ? coinsSearched : coins).map((item, index) => {
          return <ListingCard item={item} index={index} />;
        })}
      </div>
    </div>
  );
}

export default Listing;
