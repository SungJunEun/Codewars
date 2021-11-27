/*
Description:
Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.
*/

function removeZeros(array) {

  let zeros = 0;
  for(i=0;i<array.length;i++){
    if(array[i] === 0 || array[i] === '0'){
      zeros++;
    }
  }
  
  let value;
  let counter = 0;
  console.log(array);
  while(counter < zeros)  {
    for(i=0;i<array.length;i++){    
    if((array[i] === 0 || array[i] === '0') && array[i+1] !== undefined) {
      value = array[i];
      array[i] = array[i+1];
      array[i+1] = value;
    }
  }
    counter++;
}
  return array;
}
