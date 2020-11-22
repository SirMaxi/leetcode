/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balancedStrings = s.split('')
    let lCounter = 0;
    let rCounter = 0;
    let counter = 0;
    
    for(let i=0; i<balancedStrings.length; i++){
        if(balancedStrings[i] === 'R'){
            rCounter++;
            if(rCounter == lCounter) counter++
        } else{
            lCounter++;
            if(rCounter == lCounter){
                counter++
            }
        }
    }
    
    return counter;
};
