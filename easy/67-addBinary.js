
/**
 
67. 二进制求和

给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

 

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
 

提示：

每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-binary
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
};





/**
 * 1：将输入的两个二进制字符串转换为数组
 * 2：从后向前遍历两个数组直至两个数组都遍历完
 * 3：新数组对应的值为两个数组对应的每一项都相加再加上进位值
 * 4：遍历完之后最后判断是否有进位，如果有再在res数组中unshift一下
 * 5：将得到的数组处理为字符串的格式返回
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const num1Arr = a.split('');
    const num2Arr = b.split('');
    let res = [];
    let jinwei = 0;
    while(num1Arr.length || num2Arr.length){
        const num1 = Number(num1Arr.pop()) || 0;
        const num2 = Number(num2Arr.pop()) || 0;
        let sum = num1 + num2 + jinwei;
        if(sum > 1){
            jinwei = 1;
            sum = sum%2;
        }else{
            jinwei = 0;
        }
        res.unshift(sum);
    }
    jinwei && res.unshift(1);
    return res.join('');
}