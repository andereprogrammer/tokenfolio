import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useCoinContext } from "../hooks/useCoinContext";

const LineChart = () => {
  const [coinData, setCoinData] = useState([]);
  const { setLoading } = useCoinContext();

  useEffect(() => {
    const fetchCoinData = async () => {
      setLoading(true);
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7"
      );
      const data = await res.json();
      const formattedData = data.prices.map((priceData: any) => [
        new Date(priceData[0]),
        priceData[1],
      ]);
      formattedData.unshift(["Time", "Price (USD)"]);
      setCoinData(formattedData);
      setLoading(false);
    };

    fetchCoinData();
  }, []);

  return (
    <div
      style={{
        width: "800px",
        marginTop: "30px",
      }}
    >
      {coinData.length > 0 ? (
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={coinData}
          options={{
            title: "Bitcoin Price (Last 7 Days)",
            hAxis: { title: "Date" },
            vAxis: { title: "Price (USD)" },
            legend: { position: "bottom" },
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default LineChart;
