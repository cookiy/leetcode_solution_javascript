/**
0,1,,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

 

示例 1：

输入: n = 5, m = 3
输出: 3
示例 2：

输入: n = 10, m = 17
输出: 2
 

限制：

1 <= n <= 10^5
1 <= m <= 10^6

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * 数学推导法
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let result = 0;
    for (let i = 2; i < n; i++) {
        result = (m+result) % i;
    }
    return result;
};

/**
 * 模拟破解法
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let arr = Array(n).fill(0).map((e, i) => i)
    let lastCut = 0
    while(arr.length > 1){
        let cut = (m % arr.length + lastCut) % arr.length
        lastCut = cut > 0 ? cut - 1 : arr.length - 1
        cut, arr, arr.splice(lastCut, 1)
    }
    return arr[0]
};