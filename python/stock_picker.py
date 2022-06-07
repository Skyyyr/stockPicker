def picker(prices):
    sell_index = 0
    buy_index = 0
    max_profit = 0
    lowest_index = 0
    for i in range(1, len(prices)):
        current_price = prices[i]
        if current_price < prices[lowest_index]:
            lowest_index = i
        else:
            profit = current_price - prices[lowest_index]
            if profit > max_profit:
                max_profit = profit
                sell_index = i
                buy_index = lowest_index
    return [buy_index, sell_index]
