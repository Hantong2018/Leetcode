/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0, end = nums.length - 1

    while( start <= end ){
        let pivot = Math.floor( (end + start) / 2)

        if( nums[pivot] === target ) return pivot

        if( nums[pivot] < target ) {
            start = pivot + 1
        } else {
            end = pivot - 1
        }
    }

    return -1
};

