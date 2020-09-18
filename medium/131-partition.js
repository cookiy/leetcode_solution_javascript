/**
131. 分割回文串
给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

返回 s 所有可能的分割方案。

示例:

输入: "aab"
输出:
[
  ["aa","b"],
  ["a","a","b"]
]
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [];
    if (s.length === 0) {
        return res;
    }
    findPalidrome(0, s, res, []);
    return res;
};


function findPalidrome(start, s, res, curArr) {
    if (start === s.length) {
        res.push(curArr);
        return;
    }

    for (let i = start; i < s.length; i++) {
        let subStr = s.slice(start, i + 1);
        if (subStr && isPal(subStr)) {
            findPalidrome(i + 1, s, res, [...curArr, subStr]);
        }
    }
}


function isPal(str) {
    let len = Math.floor(str.length / 2);
    if (len === 0) {
        return true;
    }
    let add = str.length % 2 === 0 ? 0 : 1;
    let subStr = str.slice(0, len);
    for (let i = 0; i < len; i++) {
        if (subStr[len - i - 1] !== str[len + add + i]) {
            return false;
        }
    }
    return true;
}