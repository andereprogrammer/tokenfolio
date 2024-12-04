import { useState } from "react";
import "./../styles/searchbar.css";
import useSearchCoins from "../hooks/useSearchCoins";
import { useCoinContext } from "../hooks/useCoinContext";

function SearchBar() {
  const { coins, setSearchQuery } = useCoinContext();
  const [searchTerm, setSearchTerm] = useState("");
  const { searchHistory, clearHistory } = useSearchCoins(coins);

  const handleClear = () => {
    clearHistory();
    setSearchTerm("");
    setSearchQuery("");
  };
  const handleSearchHisClick = (term: string) => {
    setSearchQuery(term);
    setSearchTerm(term);
  };

  return (
    <>
      <div className="search__container">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search__input"
          type="text"
          value={searchTerm}
          onKeyUp={(e) => {
            console.log(e.key.includes("Enter"));
            if (e.key.includes("Enter") && searchTerm.length > 3) {
              setSearchQuery(searchTerm);
            }
          }}
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
        <div className="search__history-container">
          {searchHistory.map((item, index) => {
            return (
              <div
                onClick={() => handleSearchHisClick(item)}
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
