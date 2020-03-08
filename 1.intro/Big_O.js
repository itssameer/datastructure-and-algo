/*Big o notation to analyse which code is best.
or
which implementation can give you best performance.
this helps to us to see trade offs using one on the other implementation.
it can pin point inefficient points in the system.
*/

//Sum of N number problems..

//approach 1
function sumOfN(n){

    
    let sum=0;
    for(let i =1; i<=n; i++){
        sum += i;
    }
    return sum
}
let t1 = Date.now()
console.log(sumOfN(1000000000))
let t2 = Date.now()
console.log((t2-t1))

//OUTPUT: ~1283 ms

//approach 2

function addUpto(n){
    return n*(n+1)/2;
}
let t3 = Date.now()
console.log(addUpto(1000000000))
let t4 = Date.now()
console.log(t4-t3)

//OUTPUT: ~1ms

// above measuring technique is good but if you run these exact code on exact computer,
// the results vary. that shows these timing technique. are not accurate enough.
//so we came up with counting Operations rather than timing.

// on second example we can see the number of operations rather values are not bound to any loop or any other variable
//on the other hand first example n is bound to a loop that will execute n times. so 

//first example will have Oder of n  i.e O(n) and second example have O(1) time.


/*****************************
 * Big O for Objects.
 * ------------------------------------------
 * all bisic operation takes const time O(1) such as insertion, removal, accessing.
 * searching will take O(N). i.e searching with values. or to check if some values is there in the object.
 * 
 * Methods of Objects.
 * keys() - O(N)
 * entries() - O(N)
 * values() - O(N)
 * 
 * hasOwnProperty() - O(1)
 */

 /*********************************
  * Big O for Arrays.
  * all items are ordered
  * access the item.(random access is possible) - O(1)
  * insertion and deletion is complicated - O(N) (when inserted at the beginning.)
  * searching O(N)
  * 
  * sorting O(NlogN)
  */

  