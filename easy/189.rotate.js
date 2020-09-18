/**给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
说明:

尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为 O(1) 的 原地 算法。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**示例：
[1,2,3,4,5,6,7] k = 4 => [4,5,6,7] + [1,2,3] == [4,5,6,7,1,2,3]
[1,2,3,4,5,6,7] k = 11 => [4,5,6,7] + [1,2,3] == [4,5,6,7,1,2,3]
[1,2,3,4,5,6,7] k = 5 => [3,4,5,6,7] +[1,2] == [3,4,5,6,7,1,2]
由示例可以归纳出 k%n == 后面面 n - k%n 个元素 和 前面 k%n 个元素中间交界处 重新组合成一个新的数组的分界点，此点处整体调换两部分的数组即为所求
*/
var rotate = function(nums, k) {
    var n = nums.length;
    var reversePoint = n - k%n;
    reversePoint != 0 && (nums = nums.slice(reversePoint).contact(nums.slice(0, reversePoint)))
};

var rotate = function(nums,k) {
    for(var i = 0;i<k;i++){
        nums.unshift(nums.pop());
    }
}

/**借助新数组
时间复杂度O(n)
空间复杂度O(n)
由解法二示例可知 通过 k次旋转后 原数组元素所在位置索引i = (i+k)%n
因此借助新数组动态更新改变后的元素位置 最后再拷贝回去替换原数组的各个元素
*/
var rotate = function(nums, k) {
    var n = nums.length;
    var newArr = new Array(n);
    for(var i = 0;i<n;i++){
        newArr[(i+k)%n] = nums[i];
    }    
    for(var r = 0;r<n;r++){
        nums[r] = newArr[r];
    }    
}