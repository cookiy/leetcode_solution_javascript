/**给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/multiply-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const left = '0'.charCodeAt(0);
    // 首先将字符串用 charCodeAt 转换成对应的数字。
    // num1Arr 取较短的数字， num2Arr 取较长的数字，用 num1Arr 去分别乘 num2Arr 速度会提升15ms
    const num1Arr = (num1.length > num2.length ? num2 : num1).split('').map(item => item.charCodeAt(0) - left);
    const num2Arr = (num1.length > num2.length ? num1 : num2).split('').map(item => item.charCodeAt(0) - left);
    let res = [];
    for (let i = num1Arr.length - 1; i > -1; i--) {
        for (let j = num2Arr.length - 1; j > -1; j--) {
            // 数字的相乘的结果转换为数组，并且 reverse，方便计算
            const resArr = (num1Arr[i] * num2Arr[j]).toString().split('');
            resArr.reverse();
            const index = num2Arr.length - 1 - j + num1Arr.length - 1 - i;
            let next = 0, k = 0;
            while (k < resArr.length || next !== 0) {
                // 结果当前位数加上前一位的进位
                let sum = (res[index + k] | 0) + next;
                // 若 k < resArr，即非最后一位进位
                if (k < resArr.length) {
                    sum += +resArr[k];
                }
                res[index + k] = sum % 10;
                // 若 sum 大于10，进位 = 1
                next = sum / 10 >= 1 ? 1: 0;
                k++;
            }
        }
    }
    // 去除结果前的 0
    while (res.length > 1 && res[res.length - 1] === 0) {
        res.pop();
    }
    return res.reverse().join('');
};