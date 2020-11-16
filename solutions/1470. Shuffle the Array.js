/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let xArray = [];
    let yArray = [];
    let newArray = [];
    
    for(let i=0; i<n; i++){
        xArray.push(nums[i]);
    }
    
    for(let i=nums.length -1; i>=n; i--){
        yArray.push(nums[i])
    }
    
    const newYArray = yArray.reverse()
    
    for(let i=0; i<n; i++){
        newArray.push(xArray[i])
        newArray.push(newYArray[i])
    }
    
    return newArray
};
