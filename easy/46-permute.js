/**给定一个没有重复数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/** 回溯法递归求解全排列
每到一个位置就依次把这个位置和之后的每个位置交换，然后继续dfs
*/
/**
 * @description 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const len = nums.length;
    const res = [];
    dfs([], 0, len, nums, res);
    return res;
};


/**
 *  
 * @param {number[]} cur 
 * @param {number} index 
 * @param {number} len 
 * @param {number[]} nums 
 * @param {[]} res 
 */
var dfs = (cur, index, len, nums, res) => {
    if (cur.length === len) {
        res.push(cur.concat());
        return;
    }
    for (let i = index; i < nums.length; i++) {
        swap(nums, i, index);
        cur.push(nums[index]);
        dfs(cur, index + 1, len, nums, res);
        cur.pop();
        swap(nums, i, index);
    }
}

var swap = (nums, i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}