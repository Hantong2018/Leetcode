/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let map = []
    let res = []
    for( let i=0; i<points.length; i++ ){
        let distance = dist(points[i])
        map.push({
            distance,
            point: points[i]
        })
    }
    map.sort( (a,b) => a.distance - b.distance )
    for( let j=0; j<k; j++){
      res.push(map[j].point)
    }
    return res
  };
  
  const dist = (point) => {
    return point[0]*point[0] + point[1]*point[1]
  }
  