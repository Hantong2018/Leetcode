var lengthOfLongestSubstring = function(s) {
    let start = 0
    let maxLength = 0

    for(let i=1; i<s.length; i++){
        console.log(s[start], s[i]);
        if (s[start] === s[i]){
            maxLength = maxLength > i - start ? maxLength : i - start
            start = i
        }
    }

    return maxLength
};

let s = "pwwkew"
lengthOfLongestSubstring(s)