/**
118. 杨辉三角
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
在杨辉三角中，每个数是它左上方和右上方的数的和。
示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (!numRows) return []
    let r = Array(numRows)
    r[0] = [1]
    for (let i=1;i<numRows;i++) {
        r[i] = []
        r[i-1].reduce((p,c) => {
            r[i].push(p+c)
            return c
        },0)
        r[i].push(1)
    }
    return r
};