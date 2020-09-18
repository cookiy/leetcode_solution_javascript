/**给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/move-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**解法一：双指针法
分析：输入[0,1,0,3,12] 输出[1,3,12,0,0]

1、维护一个总是指向0的动态指针 i
2、每次遇到非0位置的数将其位置的数与0位置指针索引上的数进行交换值并更新1的指针i++
2处交换 一处总为0 所以直接赋值为0 不用存储临时变量 但如此就需要判断 i 是否等于 j 去掉为自己的情况
代码实现
*/
var moveZeroes = function(nums) {
    var i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != 0) {
            if (i != j) {
                nums[i] = nums[j]
                nums[j] = 0
            }
            i++;
        }
    }
}
// 解法二：遍历取非0值 && push 0
var moveZeroes = function(nums) {
    let insertZero = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] != 0) {
            nums[insertZero] = nums[i++];
        }
    }
    while (insertZero < n) {
        nums[insertZero++] = 0;
    }
};