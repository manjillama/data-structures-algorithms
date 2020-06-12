function buyAndSellStock(prices) {
  let buy = null;
  let sell = null;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    //Buy

    for (let j = i + 1; j < prices.length; j++) {
      //sell

      if (buy === null && prices[j] - prices[i] > 0) {
        buy = prices[i];
        sell = prices[j];
        profit = prices[j] - prices[i];
      }

      if (prices[i] < prices[j]) {
        if (prices[j] - prices[i] > profit) {
          buy = prices[i];
          sell = prices[j];
          profit = prices[j] - prices[i];
        }
      }
    }
  }
  return profit;
}

console.log(buyAndSellStock([6, 3, 1, 2, 5, 4]));
