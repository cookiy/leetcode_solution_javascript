/**
209. 长度最小的子数组
给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。如果不存在符合条件的连续子数组，返回 0。

示例: 

输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
进阶:

如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    const int_max = Number.MAX_SAFE_INTEGER;
    let i = 0,
        sum = 0,
        ans = int_max;
    for(let j = 0; j < nums.length; j++){
        sum += nums[j];
        while(sum >= s){
            ans = Math.min(ans, j - i + 1)
            sum -= nums[i++]
        }
    }
    return ans === int_max ? 0 : ans;
};