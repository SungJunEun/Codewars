/*
Description:
Given a Sudoku data structure with size NxN, N > 0 and √N == integer, write a method to validate if it has been filled out correctly.

The data structure is a multi-dimensional Array, i.e:

[
  [7,8,4,  1,5,9,  3,2,6],
  [5,3,9,  6,7,2,  8,4,1],
  [6,1,2,  4,3,8,  7,5,9],
  
  [9,2,8,  7,1,5,  4,6,3],
  [3,5,7,  8,4,6,  1,9,2],
  [4,6,1,  9,2,3,  5,8,7],
  
  [8,7,6,  3,9,4,  2,1,5],
  [2,4,3,  5,6,1,  9,7,8],
  [1,9,5,  2,8,7,  6,3,4]
]
Rules for validation

Data structure dimension: NxN where N > 0 and √N == integer
Rows may only contain integers: 1..N (N included)
Columns may only contain integers: 1..N (N included)
'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included)
*/
var Sudoku = function(data) 
{
  //   Private methods
  // -------------------------
  let sortedArray = [];
  const N = data.length;
  for(l=1;l<N+1;l++) {
    sortedArray.push(l);
  }

  function notNumber(array) {
    for (k=0;k<array.length;k++) {
      if(typeof(array[k]) != "number") {
        return true;
      }
    }
    return false;
  }
  
  function checkDimension(data) {
    for(i of data) {
      if(i.length != N) {
        return false;
      } else if(i == 0) {
        return false;
      } else if(notNumber(i)) {
        return false;
      }
    }
    return true;
  }
  
  function ifIncludes(a, b) {
    return a.every(element=>b.includes(element)) && b.every(element=>a.includes(element)) ;
  }
  
  function checkRow(data) {
    for(i of data) {
      if(!ifIncludes(i,sortedArray)) {        
        return false;
      }
    }
    return true;
  }
  
  let columnArray = [];
  function checkColumn(data) {
    for(i of data) {
      for(j=0;j<i.length;j++) {
        if(!columnArray[j]) {
          columnArray[j] = [];
          columnArray[j].push(i[j]);
        } else {
          columnArray[j].push(i[j]);
        }
      }
    }
    for(i of columnArray) {  
      if(!ifIncludes(i,sortedArray)) {        
        return false;
      }
    }
    return true;
    
  }
  
  let boxArray = [];
  function checkBox(data) {
    const n = Math.sqrt(N);
    if(!Number.isInteger(n)) {
      return false;
    }
    for (let m=0;m<N;m++) {
      let q = parseInt(m / n) * n;
      let d = m % n * n;
      if(!boxArray[m]) {
        boxArray[m] = [];
      }
      
      for(j=q;j<q+n;j++) {
        for(k=d;k<d+n;k++) {
          boxArray[m].push(data[j][k]);
        }
      }
    }

    for(i of boxArray) {  
      if(!ifIncludes(i,sortedArray)) {        
        return false;
      }
    }
    return true;
  }
  
  //   Public methods
  // -------------------------
  return {
    isValid: function() {
      // YOUR SOLUTION

      return (checkDimension(data) &&  checkRow(data) && checkColumn(data) && checkBox(data));
    }
  };
};
