/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力穷举
// 哈希表
// 排序
// Boyer-Moore 投票算法
var majorityElement = function(nums) {
    return nums[parseInt(nums.sort().length / 2)];
};