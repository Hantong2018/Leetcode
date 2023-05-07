var majorityElement = function(nums) {
    let set = new Set(nums)
    let index = 0
    let c = 0
    for(let val in set){
        for(i=0; i<=nums.length; i++){
            if(val === nums[i]){
                c++;
                index = i
            }
        }
        
    }
}

let nums = [3,3,4]
let result = majorityElement(nums)
// console.log(result);