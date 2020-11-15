/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const letters = s.split('');
    console.log(letters);
    const romanNumbers = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };
    
    let answer = []
    let sum = 0;
    
    for(let i = 0; i < s.length; i++){
        if(romanNumbers[s[i]] < romanNumbers[s[i +1]]) {
            console.log(`sustrae ${romanNumbers[s[i+1]]} con ${romanNumbers[s[i]]}`)
           answer.push(romanNumbers[s[i+1]] - romanNumbers[s[i]])
            i++
            
           } else{
               console.log(`pushea ${romanNumbers[s[i]]}`)
               answer.push(romanNumbers[s[i]])
           }
    }
    
    console.log(answer.reduce((total, current) => total + current))
    return answer.reduce((total, current) => total + current)
};
​
romanToInt("IV")
