/**
485. 最大连续1的个数
给定一个二进制数组， 计算其中最大连续1的个数。

示例 1:

输入: [1,1,0,1,1,1]
输出: 3
解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
注意：

输入的数组只包含 0 和1。
输入数组的长度是正整数，且不超过 10,000。

 */

/**
* @param {number[]} nums
* @return {number}
*/
var findMaxConsecutiveOnes = function (nums) {
  return nums.join('').split('0').reduce((max, str) => str.length > max ? str.length : max, 0)
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  const dp = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] & 1) {
      dp[i] = dp[i - 1] === undefined ? 0 + 1 : dp[i - 1] + 1
    } else {
      dp[i] = 0
    }
  }

  return Math.max(...dp)
}
