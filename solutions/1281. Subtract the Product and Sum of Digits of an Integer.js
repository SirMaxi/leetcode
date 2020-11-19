/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const numbers = Array.from(String(n), Number);
    let product = 1;
    let sum = 0;
    
    for(let i=0; i<numbers.length; i++){
        product = product * numbers[i];
    }
    
    for(let i=0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    const total = product - sum;
    
    return total;
};
