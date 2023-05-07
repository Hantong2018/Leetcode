/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let l = 0, r = nums.length - 1;
    while( l<= r){
        let m = Math.floor((l+r) /2)
        let p = nums[m] , i = l , j = r;
        while( i<= j ){
            while(nums[i] > p) i++;
            while(nums[j] < p) j--;
            if(i<=j){
                [nums[i],nums[j]]=[nums[j],nums[i]];
                i++,j--;
            }
        }
        if(l<=k-1 && k-1 <= j) r = j;
        else if(i<=k-1 && k-1 <= r) l = i;
        else return nums[k-1];
    }
    return -1;
}