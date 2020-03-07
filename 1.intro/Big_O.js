/*Big o notation to analyse which code is best.
or
which implementation can give you best performance.
this helps to us to see trade offs using one on the other implimentation.
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

// above measuring technique is good but if you run these exact code on exact computer.
// the results vary. that shows these timing technique.

//so we came up with counting Operations rather than timing.


