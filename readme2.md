# Stock Problem

## Part 1 (StockRow):

Given a javascript object:

```javascript
{
  "symbol": "NIO",
  "shortName": "NIO Inc.",
  "regularMarketPrice": { "raw": 23.175, "fmt": "23.17" }
}
```

![part 1](./images/part_1.png)

Create a component `<StockRow />`.

## Part 2 (StockTable):

Given an array of the objects from part 1, create a component `<StockTable />` that accepts the
array as a prop and displays all stocks.

```
[
  {
    "symbol": "NIO",
    "shortName": "NIO Inc.",
    "regularMarketPrice": { "raw": 23.175, "fmt": "23.17" }
  },
  ...
]
```

![part 2](./images/part_2.png)

## Part 3 (FilterableStockTable):

Create a component `<FilterableStockTable />` that accepts: `stocks`, `minMarketValue`, and
`maxMarketValue` to filter down a StockTable.

![part 3](./images/part_3.png)
