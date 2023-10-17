// 5 coins and sum possibility
// You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.
// Example 1:
// Input: amount 5, coins [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

function total(coins, n, sum) {
    if (sum == 0)
        return 1;
    if (sum < 0)
        return 0;
    if (n <= 0)
        return 0;

    var t1 = total(coins, n - 1, sum)
    var t2 = total(coins, n, sum - coins[n - 1])

    return t1 + t2;
}

var coins = [1, 2, 5];
var n = coins.length;
console.log(total(coins, n, 5));
