/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if( s.length === 1 ) return 1
    let max = 0
    let stack = {}
    for( const c of s ){
        stack[c] = (stack[c] || 0) + 1
        if ( stack[c] % 2 === 0 ) max += 2
    }
    return s.length > max ? max+1 : max
};