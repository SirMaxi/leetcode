/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for(var i=0; i<nums.length; i++){
        for(var j=0; j<nums.length; j++){
            if(nums[i] + nums[j] === target && i !== j){
                var solution = [i, j];
                return solution;
            }    
        }
    }
};
