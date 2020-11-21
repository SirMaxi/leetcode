/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const answer = [];
    let counter = 0;
    
    for(let i=0; i<nums.length; i++){
        counter = nums[i];
        for(let j=0; j<counter; j++){
            answer.push(nums[i+1]);
        }
        i++
    }
    
    return answer
};
