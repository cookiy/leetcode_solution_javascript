/**
 55. 跳跃游戏

 给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。

示例 1:

输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
示例 2:

输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jump-game
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let rightMost = 0
  for (let i = 0; i < nums.length; i++) {
    console.log(rightMost, i, nums[i])
    if (i <= rightMost) {
      rightMost = Math.max(rightMost, i + nums[i])
    } else {
      return false
    }
  }
  return true
}


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var canJumpMax = 0;
    var len = nums.length;
    for(var i = 0;i<len;i++){
        if(i > canJumpMax){
         return false;
        }
        canJumpMax = Math.max(canJumpMax,i+nums[i]);
        if(canJumpMax >= len-1){
            return true;
        }
    }
};