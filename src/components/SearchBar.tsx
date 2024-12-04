import React, { useState } from "react";
import "./../styles/searchbar.css";
import useSearchCoins from "../hooks/useSearchCoins";
import { useCoinContext } from "../hooks/useCoinContext";
type Props = {};

function SearchBar({}: Props) {
  const { coins, setSearchQuery } = useCoinContext();
  const [searchTerm, setSearchTerm] = useState("");
  const { searchQuery, searchHistory, clearHistory } = useSearchCoins(coins);
  const handleClear = () => {
    clearHistory();
    setSearchTerm("");
    setSearchQuery("");
  };

  return (
    <>
      <div className="search__container">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search__input"
          type="text"
          name=""
          id=""
          value={searchTerm}
        />
        <button
          onClick={() => setSearchQuery(searchTerm)}
          className="search__btn"
        >
          Search
        </button>
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "flex-start",
          }}
        >
          {searchHistory.map((item, index) => {
            return (
              <div
                onClick={() => setSearchQuery(item)}
                style={{
                  color: "#000",
                  backgroundColor: "#fff",
                  padding: "5px",
                  borderRadius: "10px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
        {searchHistory.length > 0 && (
          <div onClick={handleClear}>clear history</div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
