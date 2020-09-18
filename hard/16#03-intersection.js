/**
 给定两条线段（表示为起点start = {X1, Y1}和终点end = {X2, Y2}），如果它们有交点，请计算其交点，没有交点则返回空值。

要求浮点型误差不超过10^-6。若有多个交点（线段重叠）则返回 X 值最小的点，X 坐标相同则返回 Y 值最小的点。

 

示例 1：

输入：
line1 = {0, 0}, {1, 0}
line2 = {1, 1}, {0, -1}
输出： {0.5, 0}
示例 2：

输入：
line1 = {0, 0}, {3, 3}
line2 = {1, 1}, {2, 2}
输出： {1, 1}
示例 3：

输入：
line1 = {0, 0}, {1, 1}
line2 = {1, 0}, {2, 1}
输出： {}，两条线段没有交点
 

提示：

坐标绝对值不会超过 2^7
输入的坐标均是有效的二维坐标

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} start1
 * @param {number[]} end1
 * @param {number[]} start2
 * @param {number[]} end2
 * @return {number[]}
 */

var intersection = function (start1, end1, start2, end2) {
  let k1 = null, b1 = null, k2 = null, b2 = null
  if (end1[0] - start1[0] !== 0)
    k1 = (end1[1] - start1[1]) / (end1[0] - start1[0])
  if (k1!==null)
    b1 = start1[1] - k1 * start1[0]
  if (end2[0] - start2[0] !== 0)
    k2 = (end2[1] - start2[1]) / (end2[0] - start2[0])
  if (k2!==null)
    b2 = start2[1] - k2 * start2[0]
  if (k1 === null&& k2 === null) {
    if (start1[0] == start2[0] && Math.min(start1[1], end1[1]) <= Math.max(start2[1], end2[1]) && Math.min(start2[1], end2[1]) <= Math.max(start1[1], end1[1]))
      return [start1[0], Math.max(Math.min(start1[1], end1[1]), Math.min(start2[1], end2[1]))]
  } else if (k1 === null) {
    y = k2 * start1[0] + b2
    if ((start2[1] - y) * (end2[1] - y) <= 0)
      return [start1[0], y]
  } else if (k2 === null) {
    y = k1 * start2[0] + b1
    if ((start1[1] - y) * (end1[1] - y) <= 0)
      return [start2[0], y]
  } else {
    if (k1 == k2 && b1 == b2 && Math.min(start1[1], end1[1]) <= Math.max(start2[1], end2[1]) && Math.min(start2[1], end2[1]) <= Math.max(start1[1], end1[1])) {
      return [Math.max(Math.min(start1[0], end1[0]), Math.min(start2[0], end2[0])), Math.max(Math.min(start1[1], end1[1]), Math.min(start2[1], end2[1]))]
    } else if (k1 !== k2) {
      x = (b2 - b1) / (k1 - k2)
      y = k1 * x + b1
      if ((start2[1] - y) * (end2[1] - y) <= 0 && (start1[1] - y) * (end1[1] - y) <= 0)
        return [x, y]
    }
  }
  return []
}