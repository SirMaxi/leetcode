/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let parentheses = 0;
    let maxParentheses = 0;
    
    for(const loop of s){
        if(loop == '('){
            parentheses++
        } else if(loop == ')'){
            parentheses--
        }
        if(parentheses > maxParentheses){
            maxParentheses = parentheses;
        }
    }
    
    return maxParentheses;
    
};
