/******************************
 * Anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, iceman
 */

// we can solve this using frequency counter.

function validAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  var word_obj1 = {};
  var word_obj2 = {};

  for (let l of word1) {
    word_obj1[l] = (word_obj1[l] || 0) + 1;
  }


  console.log(word_obj1);

  for(let letter of word2){
      if(!word_obj1[letter]){
          return false;
      }else{
          word_obj1[letter] -= 1
      }
  }

  return true;
}

console.log(validAnagram("anagrams", "anagramm"));
