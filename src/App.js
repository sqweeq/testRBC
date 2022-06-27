import "./styles.css";
import React, { useEffect, useState } from "react";
import part1 from "../part1.json";
import part2 from "../part2.json";

export default function App() {
  const [sampleStock, setSampleStock] = useState(null);
  const [allStocks, setAllStocks] = useState([]);
  const [filterSymbol, setFilterSymbol] = useState("");
  const [filterMax, setFilterMax] = useState("");
  const [filterMin, setFilterMin] = useState("");
  const [allFilteredStocks, setAllFilteredStocks] = useState([]);
  useEffect(() => {
    setFiltered();
  }, [filterSymbol, filterMin, filterMax]);

  useEffect(() => {
    setSampleStock(part1);
    setAllStocks(part2);
  }, []);
  function setFiltered() {
    console.log(filterSymbol);
    // console.log(filterMin);
    // console.log(filterMax);

    const newFiltered = allStocks.filter((item) =>
      filterSymbol !== ""
        ? item.symbol === filterSymbol.toUpperCase()
        : item.regularMarketPrice.raw > Number(filterMin) &&
          item.regularMarketPrice.raw < Number(filterMax)
    );

    setAllFilteredStocks(newFiltered);
    console.log(allFilteredStocks);
  }
  if (sampleStock && allStocks)
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        {/* <StockRow sample={sampleStock} /> */}

        <h2>filter stock</h2>
        <label>
          Enter your name:
          <input
            type="text"
            value={filterSymbol}
            onChange={(e) => {
              setFilterSymbol(e.target.value);
              setFiltered();
            }}
          />
        </label>
        <label>
          Enter your min:
          <input
            type="text"
            value={filterMin}
            onChange={(e) => {
              setFilterMin(e.target.value);
              setFiltered();
            }}
          />
        </label>
        <label>
          Enter your max:
          <input
            type="text"
            value={filterMax}
            onChange={(e) => {
              setFilterMax(e.target.value);
              setFiltered();
            }}
          />
        </label>
        <FilterableStockTable stocks={allFilteredStocks} />

        <h2>All stock</h2>

        <StockTable stocks={allStocks} />
      </div>
    );
}

function StockRow(props) {
  // console.log(props.sample.regularMarketPrice.raw);
  return (
    <tr>
      <td>{props.sample.symbol}</td>
      <td>{props.sample.shortName}</td>
      <td>{props.sample.regularMarketPrice.raw}</td>
    </tr>
  );
}

function StockTable(props) {
  // console.log(props.stocks[0]);
  return (
    <table>
      <tr>
        <th>Symbol</th>
        <th>Security</th>
        <th>Value</th>
      </tr>
      {props.stocks.map((item, idx) => {
        return <StockRow key={idx} sample={item} />;
      })}
    </table>
  );
}

function FilterableStockTable(props) {
  return (
    <table>
      <tr>
        <th>Symbol</th>
        <th>Security</th>
        <th>Value</th>
      </tr>
      {props.stocks.map((item, idx) => {
        return <StockRow key={idx} sample={item} />;
      })}
    </table>
  );
}
