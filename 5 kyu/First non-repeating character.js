/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

*/
function firstNonRepeatingLetter(s) {
  let box = {};
  let index;
  // make object of key of string and value of the count
  for(let element of s) {
    element = element.toUpperCase();
    if(!box[element]) {
      box[element] = 1;
    } else {
      box[element] ++;
    }
  }
  // get index which has one existence
  for(item of Object.keys(box)) {
    if(box[item] == 1) {
      index = item;
      console.log(index);
      break;
    } 
  }
  // handle empty & all repeating case
  if(!index) {
    return '';
  }
  // normal cases
  for(let element of s) {
    if(element.toUpperCase() == index.toUpperCase() ) {
      return element;
    }
  }
}
