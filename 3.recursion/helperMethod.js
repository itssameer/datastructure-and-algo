/***************************
function outer(input){
    var outerScope = []

    function helper(helperInput){
        //Modify the outerScop variables
        helper(helperInput--)
    }
    helper(something)

    return outerScope;
}

 * Best used when using array or list to be modified.
 */

 //Ex: Collecting all the Odd values in an array

 function oddValues(){
     var values = [1,2,3,4,5,6,7]
     let len = values.length;
     function findOdd(len){
         
     }
 }

