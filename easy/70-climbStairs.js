/**
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/climbing-stairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
// 动态规划
/**
* @param {number} n
* @return {number}
*/
var climbStairs = function(n) {
    // 求第n步 所以索引到n
    var dp = new Array(n+1);
    if(n <= 3){
        return n;
    }
    dp[1] = 1;
    dp[2] = 2;
    for(var i = 3;i<=n;i++){
        dp[i] = dp[i-2] + dp[i-1];
    }
    return dp[n];
};
// 暴力穷举 尾递归
/**
* @param {number} n
* @return {number}
*/
var climbStairs = function(n) {
    var climb = function(i,n){
        if(i > n){
            return 0;
        }
        if(i == n){
            return 1;
        }
        return  climb(i+1,n) + climb(i+2,n);
    }
    return climb(0,n);
};

//数学
/**
* @param {number} n
* @return {number}
*/
var climbStairs = function(n) {
    var sqrt5 = Math.sqrt(5);
    var pow =  Math.pow((1+sqrt5)/2,n+1) - Math.pow((1-sqrt5)/2,n+1);
    return Math.round( pow/sqrt5 );
};