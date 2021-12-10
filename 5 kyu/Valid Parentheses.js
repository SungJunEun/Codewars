/*
Description:
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

function validParentheses(parens) {
  const object = {
    ')': "(",
    '(' : 'something else'
  }
  const array = parens.split('');
  const result = array.reduce(function(acc,cur){
    if(acc[acc.length-1] === object[cur]) {
      acc.pop();      
    } else {
      acc.push(cur);
    }
    return acc;
  },[]);
  
  return (result.length == 0) ? true : false;
}
