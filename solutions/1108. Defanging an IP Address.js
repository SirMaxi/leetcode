/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const addressArray = address.split('')
    console.log(addressArray)
    const newDot = '[.]'
    
    for(let i=0; i<addressArray.length; i++){
        if(addressArray[i] === '.'){
            addressArray[i] = newDot
        }
    }
    const answer = addressArray.join('');
    return answer;
};
