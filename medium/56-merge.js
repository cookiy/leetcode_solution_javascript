/**
给出一个区间的集合，请合并所有重叠的区间。

示例 1:

输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:

输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-intervals
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals || !intervals.length) return [];
    intervals.sort((a,b) => a[0] - b[0])
    let ans = [intervals[0]]
    for(let i = 1; i < intervals.length; i++){
        if(ans[ans.length-1][1] >= intervals[i][0]){
            ans[ans.length-1][1] = Math.max(ans[ans.length - 1][1], intervals[i][1])
        }else{
            ans.push(intervals[i])
        }
    }
    return ans
};