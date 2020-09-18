/**
有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？

如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。

你允许：

装满任意一个水壶
清空任意一个水壶
从一个水壶向另外一个水壶倒水，直到装满或者倒空
示例 1: (From the famous "Die Hard" example)

输入: x = 3, y = 5, z = 4
输出: True
示例 2:

输入: x = 2, y = 6, z = 5
输出: False

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/water-and-jug-problem
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

/**
 思路：

 为若a,b是整数,且gcd(a,b)=d，那么对于任意的整数x,y,ax+by都一定是d的倍数，特别地，一定存在整数x,y，使ax+by=d成立。
 
 如果所需要的水量是两个水壶容量的最大公约数的倍数，且水量不大于两个水壶的容量之和，那么必然可以用这两个水壶操作得到所需要的水量。

 因此问题就转化为寻找a,b的最大公约数是否能整除d。

 裴蜀定理 : https://baike.baidu.com/item/%E8%A3%B4%E8%9C%80%E5%AE%9A%E7%90%86/5186593?fr=aladdin
 最大公约数的四种解法： https://www.cnblogs.com/SeanOcean/p/11244054.html https://www.cnblogs.com/schips/p/10658253.html

 
*/

/**
* 辗转相除法
* @param {number} num1
* @param {number} num2
*/
var gcd = function (num1, num2) {
  if ((num1 - num2) < 0) {
    var k = num1
    num1 = num2
    num2 = k
  }
  while (num2 != 0) {
    var remainder = num1 % num2
    num1 = num2
    num2 = remainder
  }
  return num1
}
/**
* @param {number} x
* @param {number} y
* @param {number} z
* @return {boolean}
*/
var canMeasureWater = function (x, y, z) {
  if (z === 0 || z === x || z === y) {
    return true
  }
  if (z > x + y) {
    return false
  }
  if (z % gcd(x, y) === 0) {
    return true
  } else {
    return false
  }
}
