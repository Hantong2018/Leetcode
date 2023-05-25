/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let [start, end] = newInterval
    
    let left = []
    let right = []
    
    for (const interval of intervals) {
        if (end < interval[0]) {
            right.push(interval)
        } else if (start > interval[1]) {
            left.push(interval)
        } else {
            start = Math.min(start, interval[0])
            end = Math.max(end, interval[1])
        }
    }
    
    return [...left, [start, end], ...right]
};