import { useState, useEffect } from "react";
import { Coin, useCoinContext } from "./useCoinContext";

const useSearchCoins = (allCoins: Coin[]) => {
  const [coinsSearched, setCoinsSearched] = useState<Coin[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const { searchQuery, coins } = useCoinContext();

  useEffect(() => {
    if (searchQuery.trim()) {
      const filteredCoins = allCoins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setCoinsSearched(filteredCoins);

      setSearchHistory((prev) => {
        const updatedHistory = [
          searchQuery,
          ...prev.filter((q) => q !== searchQuery),
        ];
        return updatedHistory.slice(0, 10);
      });
    } else {
      setCoinsSearched([]);
    }
  }, [searchQuery, allCoins]);

  const clearHistory = () => {
    setSearchHistory([]);
  };

  return {
    coinsSearched,
    searchQuery,
    searchHistory,
    clearHistory,
  };
};

export default useSearchCoins;
