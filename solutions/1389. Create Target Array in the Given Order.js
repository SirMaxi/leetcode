/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let answer = [];
    
    for(let i=0; i<index.length; i++){
        answer.splice(index[i], 0, nums[i])        
    }
        
    return answer
};
