/**
给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。

返回使 A 中的每个值都是唯一的最少操作次数。

示例 1:

输入：[1,2,2]
输出：1
解释：经过一次 move 操作，数组将变为 [1, 2, 3]。
示例 2:

输入：[3,2,1,2,1,7]
输出：6
解释：经过 6 次 move 操作，数组将变为 [3, 4, 1, 2, 5, 7]。
可以看出 5 次或 5 次以下的 move 操作是不能让数组的每个值唯一的。
提示：

0 <= A.length <= 40000
0 <= A[i] < 40000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-increment-to-make-array-unique
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
每次移动可以把一个数字增加1，现在要把数组变成没有重复数字的数组，问需要的最少移动是多少。
 */


/**
 * 数组排序
 * 遍历，如果当前的数小于或等于前一个数，说明要加计算当前数和前一个数的差值再加 1，就实现了当前数比前一个数多 1
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    if(A.length==0)return 0
    A = A.sort((a, b) => a - b);
    let move = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] >= A[i+1]) {
            move += (A[i] -A[i+1] + 1)
            A[i+1] = A[i] + 1
        }
    }
    return move;
};


/**
 * Hash
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    let count = 0
    let hash = []
    for(let num of A) {
        while(hash[num]) {
            count++
            num++
        }
        hash[num] = true
    }
    return count
};