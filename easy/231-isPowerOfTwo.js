/**
给定一个整数，编写一个函数来判断它是否是 2 的幂次方。

示例 1:

输入: 1
输出: true
解释: 20 = 1
示例 2:

输入: 16
输出: true
解释: 24 = 16
示例 3:

输入: 218
输出: false
在真实的面试中遇到

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/power-of-two
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {number} n
 * @return {boolean}
 */

/** 
2的幂数的数字的二进制特点 + 位操作
2的幂数的数字的二进制有且只有一个1，其余均是0
n & (n-1)：清零最低位的1
合起来 n & (n-1) == 0
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n-1)) == 0;
};
// 函数方法
var isPowerOfTwo = function(n) {
    return Number.isInteger(Math.log2(n))
};
// 位运算
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (-n)) == n
  };
// 取模
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while(n > 1){
        n /= 2;
    }
    if(n == 1){
        return true;
    }else{
        return false;
    }
  };