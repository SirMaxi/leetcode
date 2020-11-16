/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    let maxNumber = 0;
    let answer = [];
    const falseBoolean = false;
    const trueBoolean = true;
    
    for(var i = 0; i < candies.length; i++){
        if(candies[i] > maxNumber){
            maxNumber = candies[i];
        }
    }
    
    for(let i = 0; i < candies.length; i++){
        if((candies[i] + extraCandies) >= maxNumber){
            answer.push(trueBoolean)
        } else{
            answer.push(falseBoolean)
        }
    }
    return answer
};
