/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arrayNumbers = Array.from(x.toString()).map(Number)
    for(let i=0; i<arrayNumbers.length; i++){
        console.log(`i = ${arrayNumbers[i]}`)
        for(let j=(arrayNumbers.length -1); j >= 0; j--){
            console.log(`j = ${arrayNumbers[j]}`)
            if(arrayNumbers[i] === arrayNumbers[j - i]){
                if(i === j) return true;
                break;
            } else{
                return false;
            }
        }
    }
};
