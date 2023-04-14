/**
 * @param {string} s
 * @return {boolean}
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
 */

var isValid = function(s) {
    const stack = []
    const length = s.length

    for ( let i=0; i<length; i++){
        const curr = s[i]
        if (curr === '(' || curr === '{' || curr === '['){
            stack.push(curr)
        } else {
            const prev = stack.pop()
            if (prev === '(' && curr !== ')' 
                || prev === '{' && curr !== '}'
                || prev === '[' && curr !== ']' || !prev){
                    return false
            }
        }
    }

    if (stack.length){
        return false
    }

    return true
};