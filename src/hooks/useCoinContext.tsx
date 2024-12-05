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
interface CoinDetails {
  name: string;
  symbol: string;
  market_cap_rank: number;
  id: string;
  image: {
    thumb: string;
    small?: string;
    large?: string;
  };
  market_data: {
    current_price: {
      usd: number;
      [key: string]: number;
    };
    market_cap: {
      usd: number;
      [key: string]: number;
    };
    high_24h: {
      usd: number;
      [key: string]: number;
    };
    low_24h: {
      usd: number;
      [key: string]: number;
    };
  };
  links: {
    homepage: string[];
    [key: string]: any;
  };
}

type CoinContextType = {
  coins: Coin[];
  setCoins: React.Dispatch<React.SetStateAction<any[]>>;
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setCoinId: React.Dispatch<React.SetStateAction<string>>;
  coinId: string;
  coinDetails: CoinDetails;
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
  setCoinId: () => {},
  coinId: "",
  coinDetails: {
    name: "",
    id: "",
    market_cap_rank: 0,
    symbol: "",
    image: {
      thumb: "",
      small: "",
      large: "",
    },
    market_data: {
      current_price: {
        usd: 0,
      },
      market_cap: {
        usd: 0,
      },
      high_24h: {
        usd: 0,
      },
      low_24h: {
        usd: 0,
      },
    },
    links: {
      homepage: [""],
    },
  },
});

export const CoinProvider = ({ children }: { children: ReactNode }) => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [currency, setCurrency] = useState("usd");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [coinDetails, setCoinDetails] = useState({
    name: "",
    symbol: "",
    id: "",
    market_cap_rank: 0,
    image: {
      thumb: "",
      small: "",
      large: "",
    },
    market_data: {
      current_price: {
        usd: 0,
      },
      market_cap: {
        usd: 0,
      },
      high_24h: {
        usd: 0,
      },
      low_24h: {
        usd: 0,
      },
    },
    links: {
      homepage: [""],
    },
  });
  const [coinId, setCoinId] = useState("");

  useEffect(() => {
    const fetchCoinDetails = async () => {
      setLoading(true);
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );
      const data = await response.json();
      setCoinDetails(data);
      setLoading(false);
    };
    if (coinId) {
      fetchCoinDetails();
    }
  }, [coinId]);

  useEffect(() => {
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
        setCoinId,
        coinId,
        coinDetails,
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
