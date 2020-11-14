/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   const value =
       parseFloat(
           x
            .toString()
            .split('')
            .reverse()
            .join('')
       ) * Math.sign(x)
   
   if(value > Math.pow(2, 31) || value < Math.pow(-2, 31)){
       return 0;
   } else{
       return value
   }
 
};
