/**
给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/**
解法一：双指针 + 从前往后
归并排序
从小到大按顺序缓存到一个数组中
nums1按序替换
归并排序不太懂的可以看看我的这篇文章 */
var merge = function(nums1, m, nums2, n) {
    let left = 0;
    let right = 0;
    let tmp_nums1 = nums1.slice(0, m);
    let tmp_nums2 = nums2.slice(0, n);
    let result = [];
    while (left < m && right < n) {
        if (tmp_nums1[left] < tmp_nums2[right]) {
            result.push(tmp_nums1[left]);
            left++;          
        } else {
            result.push(tmp_nums2[right]);
            right++;
        }
    }
    result = result.concat(tmp_nums1.slice(left)).concat(tmp_nums2.slice(right));
    for (let i = 0; i < result.length; i++) {
        nums1[i] = result[i];
    }
};


/**
思路
两个数组从小到大排序
且题目要求 修改nums1为合并排好序的nums1+nums2
双指针
两个分别指向两个数组尾部的指针
从后向前
比较两指针位置的值
大的一定是结果数组的最大值
一一填充到 nums1的末尾
遍历完后
当 n > 0 时
说明 nums2 中还有剩余没有比较的数字
将其插入替换 nums1 数组前面n个数字即可
*/
var merge = function(nums1, m, nums2, n) {
    let count = m + n;
    while (m >0 && n >0) {
        nums1[--count] = nums1[m-1] < nums2[n-1] ? nums2[--n] : nums1[--m];
    }
    if (n > 0) {
        nums1.splice(0, n, ...nums2.slice(0,n));
    }
}