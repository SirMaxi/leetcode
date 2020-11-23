/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    
    const newArray = [];
    
    function dfs(node){
        if(!node){
            return;
        }
        
        newArray.push(node.val);
        if(node.next){
            dfs(node.next)
        }
    }
    
    dfs(head)
    
    const fixedArray = parseInt(newArray.join(''), 2)
    return fixedArray;
    
    
    
};
