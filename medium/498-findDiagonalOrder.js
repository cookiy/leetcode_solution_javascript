/**
给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

 

示例:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

输出:  [1,2,4,7,5,3,6,8,9]

解释:

 

说明:

给定矩阵中的元素总数不会超过 100000 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/diagonal-traverse
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDiagonalOrder = (matrix = []) => {
    const result = []
    const rowLength = matrix.length
    const colLength = (matrix[0] || []).length
    
     if (matrix.length === 0) {
        return result
    } 
    
    const totalSize = matrix.length * (matrix[0] ? matrix[0].length : 0)
    
    let i = 0
    let j = 0
    let isGoingUp = true
    
    while (result.length !== totalSize) {
        const rowExists = i >= 0 && i <= rowLength - 1
        const colExists = j >= 0 && j <= colLength - 1

        if (!rowExists || !colExists) {
            if (!rowExists && !colExists) {
                i += isGoingUp ? 2 : -1
                j += isGoingUp ? -1 : 2
            } else if (!rowExists && colExists) {
                i += isGoingUp ? 1 : -1
                j += isGoingUp ? 0 : 2
            } else {
                i += isGoingUp ? 2 : 0
                j += isGoingUp ?  -1 : 1
            }
            
            isGoingUp = !isGoingUp
        } else {
            result.push(matrix[i][j])
            i += isGoingUp ? -1 : 1
            j += isGoingUp ? 1 : -1
        }   
    }
    
    return result
};