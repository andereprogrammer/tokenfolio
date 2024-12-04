import React, { ReactNode, useContext, useEffect, useState } from "react";
import axios from "axios";

export type Coin = {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  image: string;
  price_change_percentage_24h: string;
};

type CoinContextType = {
  coins: Coin[];
  setCoins: React.Dispatch<React.SetStateAction<any[]>>;
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
};

export const CoinProviderContext = React.createContext<CoinContextType>({
  coins: [],
  currency: "usd",
  setCurrency: () => {},
  setCoins: () => {},
  setSearchQuery: () => {},
  searchQuery: "",
  setLoading: () => {},
  loading: false,
});

export const CoinProvider = ({ children }: { children: ReactNode }) => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [currency, setCurrency] = useState("usd");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(currency);
    const fetchCoins = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets`,
          {
            params: {
              vs_currency: currency,
              order: "market_cap_desc",
              per_page: 50,
              page: 1,
            },
          }
        );
        setCoins(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching coins:", error);
        setLoading(false);
      }
    };

    fetchCoins();
  }, [currency]);

  return (
    <CoinProviderContext.Provider
      value={{
        setCurrency,
        setCoins,
        currency,
        coins,
        searchQuery,
        setSearchQuery,
        setLoading,
        loading,
      }}
    >
      {children}
    </CoinProviderContext.Provider>
  );
};

export const useCoinContext = () => {
  const context = useContext(CoinProviderContext);
  if (!context) {
    throw new Error("useCoinContext must be used within a CoinProvider");
  }
  return context;
};
