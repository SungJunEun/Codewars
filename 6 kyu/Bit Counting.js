/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/
var countBits = function(n) {
  // set counter
  let counter = 0;
  
  while(true) {
    let share = parseInt(n/2);
    let reminder = n % 2;
     n = share;
    
    // add only if reminder is 1
    if(reminder == 1) {
      counter++;
    }
    if(n == 0) {
      break;
    }
  }
  return counter;
};
