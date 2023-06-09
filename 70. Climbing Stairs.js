/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const res = [0,1,2]

    for(let i=3; i<=n; i++){
        res[i] = res[i-1] + res[i-2]
    }

    return res[n]
};