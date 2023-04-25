const maximiseProfits = require("./stocks");
const testStockPrices = require("./testStockPrices");
const fullStockPrices = require("./stockPrices");

describe("maximiseProfits  tests", () => {
  test("should return an object with name and maxProfit properties", () => {
    expect(maximiseProfits([[]])).toEqual({ name: "", maxProfit: 0 });
  });
  test("should return the most profitable stock object when passed an array with two days of info, for one company", () => {
    const stock = [
      [
        {
          name: "Apple",
          price: 120.25,
        },
      ],
      [
        {
          name: "Apple",
          price: 125.58,
        },
      ],
    ];
    const result = { name: "Apple", maxProfit: 5.33 };
    const output = maximiseProfits(stock);
    expect(output).toEqual(result);
  });
  test("should return the most profitable stock object when passed an array with multiple days of info, for one company", () => {
    const stock = [
      [
        {
          name: "Apple",
          price: 120.25,
        },
      ],
      [
        {
          name: "Apple",
          price: 125.58,
        },
      ],
      [
        {
          name: "Apple",
          price: 130.68,
        },
      ],
      [
        {
          name: "Apple",
          price: 127.48,
        },
      ],
    ];
    const result = { name: "Apple", maxProfit: 10.43 };
    const output = maximiseProfits(stock);
    expect(output).toEqual(result);
  });
  test("should return the most profitable stock object when passed an array with multiple days of info, for two companies", () => {
    const result = { name: "Microsoft", maxProfit: 19.5 };
    const output = maximiseProfits(testStockPrices);
    expect(output).toEqual(result);
  });
  test("should return the most profitable stock from a larger data set", () => {
    const result = { name: "Tesla", maxProfit: 62.45 };
    const output = maximiseProfits(fullStockPrices);
    expect(output).toEqual(result);
  });
  test("should return the most profitable stock from a larger data set", () => {
    const result = { name: "Tesla", maxProfit: 62.45 };
    const output = maximiseProfits(fullStockPrices);
    expect(output).toEqual(result);
  });
});
