/*
Description:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
var moveZeros = function (arr) {  
  let counter = 0;
  function spliceCount(number) {
    arr.splice(number,1);
    counter++;
  }
  arr.forEach(element => {
    if(element === 0) {
     const index = arr.indexOf(element);
     spliceCount(index);
     while(arr[index] === 0) {
       spliceCount(index);       
      }
    }
  });
 
  for(i =0 ; i<counter ; i++) {
    arr.push(0);
  }
  return arr;
}
