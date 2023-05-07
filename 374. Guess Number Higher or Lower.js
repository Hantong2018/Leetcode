/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low = 1, high = n
    while(low <= high){
        let pivot = Math.floor( (high-low) / 2 + low )
        let res = guess(pivot)
        if ( res === 0){
            return pivot
        } else if ( res === 1 ){
            low = pivot + 1
        } else {
            high = pivot - 1
        }
    }
};