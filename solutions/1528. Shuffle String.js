/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const sSplit = s.split('');
    const answer = [];
    
    while(answer.length < indices.length){
        for(let i=0; i<indices.length; i++){
            for(let j=0; j< indices.length; j++){
                if(i === indices[j]){
                    answer.push(sSplit[j])
                }
            }
        }
    }
    
    const trueAnswer = answer.join('')
    return trueAnswer
};
