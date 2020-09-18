/**
137. 只出现一次的数字 II
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,3,2]
输出: 3
示例 2:

输入: [0,1,0,1,0,1,99]
输出: 99
通过次数28,929提
 */

/**
 * 只适用于查找在数组中只出现一次的元素，最差时间复杂度为数组长度，平均时间复杂度为n/2，没有用到额外的内存空间
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.filter((ele, index) => {
        return nums.lastIndexOf(ele) === nums.indexOf(ele);
    })[0];
};

var singleNumber = function(nums) {
    return +Object.keys(nums.reduce((t, i) => {
        if (t[i] === 2) delete t[i];
        else if (t[i] === 1) t[i] = 2;
        else t[i] = 1;
        return t;
    }, {}))
};

var singleNumber = function(nums) {
    nums.sort(function(a, b){return a - b});
    let i=0;
    let res=0;
    for(let j=0;j<nums.length;j++){
        if(i<2||nums[j]!=nums[i-2]){
            nums[i]=nums[j];
            i++
        }
    }
    for(let l=0;l<=i-1;l++){
        res^=nums[l]
    }
    return res
};
