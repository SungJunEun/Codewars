/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/
function pigIt(str){
  regexp = /\w*/g;
  const replacement = str.replace(regexp,function(match) {
    if(!match) {
      return match;  
    }
    else {
      let newWord = match.slice(1)+match[0]+'ay';
      return newWord;
    }
    
  });
  return replacement;
}
