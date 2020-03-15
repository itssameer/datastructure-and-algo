/*********************************
 * Sliding window:
 * This pattern involve creating a window which can either be a array or number
 * from one position to another
 * 
 * Depending on a certain condition, the window either be increased or closed(and new window is created)
 * 
 * Very useful for keeping track of subset of data in an array/string etc..
 */

 //maxSubArry(a[...], subArraySize)

 //Bruteforce approach

function maxSubArrySum(arr,size){
    if(arr.length <= 0){
        return null;
    }
    var max =-Infinity;
    for(let i = 0; i < arr.length -size +1; i++){
        var temp = 0;
        
        for(let j=0; j< size; j++){
            temp += arr[i+j];
        }
        if(temp > max)  max=temp ;
    }
    return max;
}

// console.log(maxSubArrySum([1,2,3,5,7], 2));


function slidingWindowSum(arr, size){
    let maxsum = 0;
    let tempsum = 0;
    if(arr.length <= 0 ) return null;
    for(let i = 0; i<size; i++) maxsum += arr[i];
    tempsum = maxsum;
    console.log(maxsum)
    for(let i = size; i<arr.length; i++){
        tempsum = tempsum - arr[i-size]+arr[i]
        maxsum = Math.max(tempsum,maxsum);
    }
    return maxsum
}

console.log(slidingWindowSum([1,2,3,5,7], 2));