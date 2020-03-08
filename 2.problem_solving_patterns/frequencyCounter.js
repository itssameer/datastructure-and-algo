/***************************
 * Frequency Counter..O(N)
 * ------------------------------
 * 
 * This pattern uses objects or sets o collect values/ frequencies of values
 * 
 * This can often avoid the need for nested loops or O(N^2) operations with arrays/Strings.
 */

 /*******************************************
  * Examples:
  * ----------------------------
  * Write a function called same, which accepts two arrays. The function should return true if every value in
  * in the array has its corresponding value squared in the 
  * second array. the frequency of values must be the same.
  * 
  * Same([1,2,3],[4,1,9]) // true
  * Same([1,2,3],[1,9]) //False
  * Same([1,2,1],[4,4,1]) //False
  */


//Approach 1:

function Same(arr1,arr2){
    console.log('in same')
    if(arr1.length !== arr2.length){
        return false;
    }
    for(var el of arr1){
        let correctIndex = arr2.indexOf(el ** 2)
        if(correctIndex === -1){
            
            return false;
        }
        console.log(arr2.splice(correctIndex,1))
    }
    return true
}
// console.log(Same([1,2,1], [1,4,4]))

//Time complexity: BigO(N^2)
// Each (N) el in arr1 wil be search (M) times in arr2 ie. in indexOf method. M*N ~ N^2


//approach 2
// Using frequency counter:
function SameWithFC(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2);
    

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}

console.log(SameWithFC([1,2,3],[1,4,4]))

//time complexity ~ 3N so bigO(N)