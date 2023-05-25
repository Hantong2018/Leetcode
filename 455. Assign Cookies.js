/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    if( !s.length ) return 0

    let g_sort = g.sort( (a,b) => a-b )
    let s_sort = s.sort( (a,b) => a-b )
    let c = 0

    s_sort.forEach( val => {
        if(val >= g_sort[c]) c++;
    })

    return c
};