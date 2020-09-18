/**
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    while(s.length) {
        var tmp = s;
        s = s.replace('()','');
        s = s.replace('[]', '');
        s = s.replace('{}', '');
        if (s == tmp) {
            return false;
        }
    }
    return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var map = {
        "(":")",
        "[":"]",
        "{":"}"
    }
    var leftArr = [];
    for (var ch of s){
        if (ch in map) {
            leftArr.push(ch); //为左括号时，顺序保存
        } else { //为右括号时，与数组末位匹配
            if(ch != map[leftArr.pop()]) return false;
        }
    }
    return !leftArr.length //防止全部为左括号
}