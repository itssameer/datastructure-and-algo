/***********************************
 * Multiple Pointers
 * Creating pointer or values that correspond to an index or position and move towards the beginning, end or middle
 * based on certain condition
 */

// requirement.
// 1. strings should be in ordered

//EXAMPLE:
//Finding the pair which returns the sum Zero input is sorted array.

function sumZero(arr) {
  var i = 0,
    j = arr.length - 1;
  console.log(i, j);

  while (i < j) {
    console.log(arr[i], arr[j]);
    if (arr[i] === 0) return undefined;
    if (arr[i] + arr[j] === 0) {
      console.log("found");
      return [i, j];
    } else if (arr[i] + arr[j] > 0) j--;
    else i++;
  }
}

// console.log(sumZero([-3, -1, 0, 1, 4]));

function countUniqueValues(arr) {
  var i = 0,
    j = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
    }
  }
  return i+1;
}

console.log(countUniqueValues([1,1,2,3,3,4,4,4,4,5]))