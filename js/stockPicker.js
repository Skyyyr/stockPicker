exports.picker = function(prices) {
    let sellIndex = 0;
    let buyIndex = 0;
    let highestProfit = 0;
    let LowestPriceIndx = 0;
    // start at the next index so you can catch all cases
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        if (currentPrice < prices[LowestPriceIndx]) {
            LowestPriceIndx = i;
        } else {
            let profit = currentPrice - prices[LowestPriceIndx];
            if (profit > highestProfit) {
                highestProfit = profit;
                sellIndex = i;
                buyIndex = LowestPriceIndx;
            }
        }
    }
    return [buyIndex, sellIndex];
}
