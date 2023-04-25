const fullStockPrices = require("./stockPrices");

function maximiseProfits(stocks) {
  const mostProfitable = { name: "", maxProfit: 0 };
  const stockObj = {};

  // Setup stocks objects using nested arrays, with a price list for each company
  for (let i = 0; i < stocks.length; i++) {
    for (let j = 0; j < stocks[i].length; j++) {
      if (stockObj.hasOwnProperty(stocks[i][j].name)) {
        stockObj[stocks[i][j].name].prices.push(stocks[i][j].price);
      } else {
        stockObj[stocks[i][j].name] = {};
        stockObj[stocks[i][j].name].prices = [stocks[i][j].price];
      }
    }
  }

  // Sort all the prices for each company
  for (let stock in stockObj) {
    stockObj[stock].prices.sort((a, b) => a - b);
  }

  // Work out the differences for each companies stock prices (highest - lowest)
  for (let stock in stockObj) {
    const arr = stockObj[stock].prices;
    const priceDiff = arr[arr.length - 1] - arr[0];

    stockObj[stock].diff = Number(priceDiff.toFixed(2));
  }

  // Find the best profit from every company
  for (let stock in stockObj) {
    if (stockObj[stock].diff > mostProfitable.maxProfit) {
      mostProfitable.name = stock;
      mostProfitable.maxProfit = stockObj[stock].diff;
    }
  }

  return mostProfitable;
}

// Run and time the code
// console.time();
// maximiseProfits(fullStockPrices);
// console.timeEnd();

module.exports = maximiseProfits;
