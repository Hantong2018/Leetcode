/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length===2)return [0,1];
    let memo = {};

    for(let i=0; i<nums.length; i++){
        let num2 = target - nums[i];
        if(memo[num2] !== undefined){
            return [memo[num2], i]
        }
        memo[nums[i]] = i;
    }
};