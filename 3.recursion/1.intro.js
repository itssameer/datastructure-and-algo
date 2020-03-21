/**********************
 * function that calls itself
 * JSON.parse/ JSON.stringify uses recursion
 * recursive function has to have a base case.
 * base case is when to end the recursion.
 * ex: empty list
 * 
 */

 //Ex: countDown:

 function countDown(num){
     if(num <=0){
         return 0
     }
     console.log(num)
     num--;
     countDown(num)
 }

//  countDown(5)


 //As function calls grow bigger the call stack will grow big might run into stack memory overflow.

 //Ex: sumRange

 function sumRange(num){
     if (num == 1) return 1;
     return num + sumRange(num - 1)
 }

 console.log(sumRange(10))