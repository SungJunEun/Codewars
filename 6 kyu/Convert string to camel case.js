/*
Description:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str){
  let array = [];
  if(str.includes('-')) {
     array = str.split('-');
  }
  else if(str.includes('_')) {
    array = str.split('_');
  }
  else {
    array.push(str);
  }
  for(i=1;i<array.length;i++) {
    const key = array[i][0].toUpperCase();
    const arrayUpper = array[i].split('');
    arrayUpper[0] = key;
    array[i] = arrayUpper.join('');
  }
  array.join('');
  
  return array.join('');
}
