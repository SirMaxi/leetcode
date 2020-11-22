/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let nums = [];
    let answer = 0;
    
    for(let i=0; i<n; i++){
        nums.push(start + 2*i);
        answer ^= nums[i];
    }
    
    return answer
};
