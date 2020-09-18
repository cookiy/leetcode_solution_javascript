
/**
给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var res=[]
    var i=0
    var j=0
    var n=matrix.length-1
    if(n<0)
      return []
    var m=matrix[0].length-1
    var turn=m==0?'d':'r'
    var boundl=0
    var boundr=m
    var boundu=0
    var boundd=n
  
    for(var a=0;a<(m+1)*(n+1);a++){
      res.push(matrix[i][j])
      if(turn=='r'){
        j++
        if(j==boundr){
          boundu++
          turn='d'
        }
      }else if(turn=='d'){
        i++
        if(i==boundd){
          boundr--
          turn='l'
        }
      }else if(turn=='l'){
        j--
        if(j==boundl){
          boundd--
          turn='u'
        }
      }else if(turn=='u'){
        i--
        if(i==boundu){
          boundl++
          turn='r'
        }
      }
    }
    return res
  };
