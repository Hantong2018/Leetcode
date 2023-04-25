/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map()
    for (let x of arr){
        if(map.has(x)){
            map.set(x, map.get(x) + 1)
        } else {
            map.set(x, 1)
        }
    }
    let set = new Set(map.values())
    return set.size === map.size
};