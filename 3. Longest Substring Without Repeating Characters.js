/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let start = 0
    let maxLength = 0

    for(let i=0; i<s.length; i++){
        if (map.has(s[i]) && map.get(s[i]) >= start){
            start = map.get(s[i]) + 1
        }
        maxLength = Math.max(maxLength, i+1-start)
        map.set(s[i], i)
    }

    return maxLength
};