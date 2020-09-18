/**
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

示例 1:

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
示例 2:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    if(n == 0){
        return 0;
    }
    let dp = Array.from(new Array(n),() => new Array(2));
    // 0 maxprofit
    // 1
    for(let i = 0;i < n;i++){
        if(i == 0){
            dp[i][0] = 0;
            dp[i][1] = -prices[i];
            continue;
        }
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]);
        dp[i][1] = Math.max(-prices[i],dp[i-1][1]);
    }
    return dp[n-1][0];
};

// 动态规划，子问题如果被重复利用，整体最优解取决于子问题最优解
var maxProfit = function(prices) {
    let n = prices.length;
    if (n === 0) {
        return 0;
    }
    let dp = Array.from(new Array(n), () => new Array(2));
    for (let i = 0; i < n; i++) {
        if (i== 0) {
            dp[i][0] = 0;
            dp[i][1] = -prices[i];
            continue
        }
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][i]+price[i]);
        dp[i][1] = Math.max(-prices[i],dp[i-1][1]);
    }
    return dp[n-1][0];
};

// 动态规划 + 降维
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    if(n == 0){
        return 0;
    }
    var dp_i_0 = 0;
    var dp_i_1 = -Infinity;
    for(let i = 0;i < n;i++){
        dp_i_0 = Math.max(dp_i_0,dp_i_1 + prices[i]);
        dp_i_1 = Math.max(-prices[i],dp_i_1);
    }
    return dp_i_0;
};

// 穷举
/**
空间复杂度：O(n^2)
时间复杂度：O(1)
因限制交易一笔
所以可以枚举出所有的交易组合维护max = max(prices[j] = prices[i])即可
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    for(var i = 0;i <prices.length - 1;i++){
        for(var j = i+1;j < prices.length;j++){
            max = Math.max(max,prices[j] - prices[i])
        }
    }
    return max;
};

/**
峰谷法
时间复杂度：O(n)
空间复杂度：O(1) */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let valley = Number.MAX_SAFE_INTEGER;
    let max = 0;
    for(var i = 0;i <prices.length;i++){
        if(prices[i] < valley){
            valley = prices[i];
        }else{
            max = Math.max(max,prices[i] - valley);
        }
    }
    return max;
};