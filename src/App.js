import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers") //
      .then((res) => {
        res.json().then((json) => {
          setCoins(json.slice(0, 10));
          setLoading(false);
        });
      });
  }, []);

  const [isInverted, setIsInverted] = useState(false);
  const [selectedCoin, setSeletedCoin] = useState("");
  const [value, setValue] = useState("");
  const changeCoin = (e) => {
    setSeletedCoin(e.target.value);
    setValue(1);
  };
  const changeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `: ${coins.length}`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={changeCoin}>
          <option key={null} value={null}>
            Please Selected Coin
          </option>
          {coins.map((coin) => {
            return (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}: ${coin.quotes.USD.price} USD)
              </option>
            );
          })}
        </select>
      )}
      <hr />
      <h2>USD & Coin Inverter</h2>
      <label htmlFor="coin-input">Coin</label>
      <input //
        id="coin-input"
        type="number"
        placeholder="Coin"
        value={!isInverted ? value : value / selectedCoin}
        onChange={changeValue}
        disabled={isInverted || selectedCoin === ""}
      />
      <label htmlFor="usd-input">USD</label>
      <input
        id="usd-input"
        type="number"
        placeholder="USD"
        value={
          isInverted
            ? value
            : selectedCoin * value === 0
            ? ""
            : selectedCoin * value
        }
        onChange={changeValue}
        disabled={!isInverted || selectedCoin === ""}
      />
      <button onClick={() => setIsInverted((current) => !current)}>
        Invert
      </button>
      <button onClick={() => setValue("")}>Reset</button>
    </div>
  );
}

export default App;
