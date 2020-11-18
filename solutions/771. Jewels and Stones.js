/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const jSplit = J.split('');
    const sSplit = S.split('');    
    let newArray = [];
    
    for(let i=0; i<jSplit.length; i++){
        for(let j=0; j<sSplit.length; j++){
            if(jSplit[i] === sSplit[j]){
                newArray.push(sSplit[j]);
            }
        }
    }
    
    return newArray.length;
};
