/* 
In this kata your task is to create bit calculator. 
Function arguments are two bit representation of numbers ("101","1","10"...), and you must return their sum in decimal representation.

Test.expect(calculate("10","10") == 4);
Test.expect(calculate("10","0") == 2);
Test.expect(calculate("101","10") == 7);

parseInt and some Math functions are disabled.
Those Math functions are enabled: pow,round,random
*/

function calculate(num1,num2){
  let i = 0;
  let counter = 0;
  
  // get the ith digit
  function digit(x, i) {
      return x[x.length-i-1];
    }
  
  while(true) {
    let XOR = digit(num1, i) ^ digit(num2, i);
    let AND = digit(num1, i) & digit(num2, i);
    
    // add for each cases
    if((XOR == 0) && (AND == 1)) {
      counter += Math.pow(2,i+1);
    }
    else if(XOR == 1 && (AND == 0)) {
      counter += Math.pow(2,i);
    }
    
    // stop condition
    if((i+1 >= num1.length) && ( i+1 >= num2.length )) {
      break;
    }
    i++;
  }
  return counter;
}
