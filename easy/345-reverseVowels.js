/**
345. 反转字符串中的元音字母
编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例 1:

输入: "hello"
输出: "holle"
示例 2:

输入: "leetcode"
输出: "leotcede"
说明:
元音字母不包含字母"y"。
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var result;
    var temp
    var arr = ['a','e','i','o','u','A','E','I','O','U']
    var t = s.split('')
    var i = 0; j = t.length

    
    while(i<j){
        while(i<j && arr.indexOf(t[i]) == -1){
            i++;
        }
        while(i<j && arr.indexOf(t[j]) == -1){
            j--
        }
        temp = t[i];
        t[i] = t[j];
        t[j] = temp

        i++;
        j--
    }
    result = t.join('');
    return result
};