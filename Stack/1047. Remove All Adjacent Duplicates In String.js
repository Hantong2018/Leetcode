/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = []
    for(let i=0; i<s.length; i++){
        if (stack.length > 0 && s[i] === stack[stack.length-1]){
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.join('')
};

// var removeDuplicates = function(s) {
//     const stack = []
//     for (c of s){
//         const prev = stack.pop()
//         if (prev != c){
//             stack.push(prev)
//             stack.push(c)
//         }
//     }
//     return stack.join('')
// };