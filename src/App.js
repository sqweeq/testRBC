import "./styles.css";
import React, { useEffect, useState } from "react";
import part1 from "../part1.json";
import part2 from "../part2.json";

export default function App() {
  const [sampleStock, setSampleStock] = useState(null);
  const [allStocks, setAllStocks] = useState([]);

  useEffect(() => {
    setSampleStock(part1);
    setAllStocks(part2);
    console.log(allStocks);
  }, []);
  if (sampleStock && allStocks)
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        {/* <StockRow sample={sampleStock} /> */}
        <StockTable stocks={allStocks} />
      </div>
    );
}

function StockRow(props) {
  console.log(props.sample.regularMarketPrice.raw);
  return (
    <tr>
      <td>{props.sample.symbol}</td>
      <td>{props.sample.shortName}</td>
      <td>{props.sample.regularMarketPrice.raw}</td>
    </tr>
  );
}

function StockTable(props) {
  console.log(props.stocks[0]);
  return (
    <table>
      <tr>
        <th>Symbol</th>
        <th>Security</th>
        <th>Value</th>
      </tr>
      {props.stocks.map((item, idx) => {
        return <StockRow sample={item} />;
      })}
    </table>
  );
}
