/**
45. 跳跃游戏 II
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

示例:

输入: [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
说明:

假设你总是可以到达数组的最后一个位置。
 */
/**
贪心算法
每次更新上一步所能跳的最远距离，遍历时，当且仅当上一步(可能隔好几步，这里是泛指)的最远距离 == 当前位置时，说明当前节点是你跳跳过程中每个阶段跳对应的可以跳的最远的距离，步数+1即可

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let steps = 0,
        canJumpMax = 0,
        last_canJumpMax = 0,
        len = nums.length;
    for(let i = 0; i<len-1; i++){
        canJumpMax = Math.max(canJumpMax, i+nums[i]);
        if(last_canJumpMax == i){
            last_canJumpMax= canJumpMax;
            steps++;
        }
        if(last_canJumpMax >= len-1){
            break;
        }
    }
    return steps;
};


/**
递归回溯
这一题不过是求众多可能组合中，所用步数最小的解
直接维护一个最小变量即可
遍历中，增加一个step步数，每次++
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var minStep = Number.MAX_SAFE_INTEGER;
    function canJumpFromWhere(position,nums,step){
        // 跳到终点了
        if(position == nums.length - 1){
            minStep = Math.min(minStep,step);
        }
        // 当前位置可跳的最远距离索引位置，取min是因为最远距离不能超过nums的长度对应的索引值
        var furthestPosition = Math.min(position+nums[position],nums.length - 1);
        for(var nextPosition = position+1;nextPosition <= furthestPosition;nextPosition++){
            canJumpFromWhere(nextPosition,nums,step+1)         
        }
    }
    canJumpFromWhere(0,nums,0);
    return minStep;
};