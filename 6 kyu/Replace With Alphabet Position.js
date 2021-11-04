/*
Description:
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
*/
function alphabetPosition(text) {
  //make string to array
  const textArray = text.split('');
  
  // one-to-one corresponce from a~z to 1~26 by ASCII code
  const modify = textArray.map(element => {
    return element.toLowerCase().charCodeAt()-96;
  });
  
  // remove items which are not alphabets
  const result = modify.filter(element => {
    return (0<element) && (element<27);
  });
  
  //make array into string with black in between
  const modifiedstring = result.join(' ');
  return modifiedstring;
}
