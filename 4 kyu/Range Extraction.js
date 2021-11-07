/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
*/
function solution(list){
 // make array ascending order
 let i = 0;
 let min;
 let index;
 function ascendOrder(list) {
   while(i<list.length-1) {
    let min = list[i];
    for(let j= 0;j<list.length;j++) {
      if(list[j+1]<list[j]) {
        min = list[j+1];
      }
    }
    index = list.indexOf(min);
    list[index] = list[i];
    list[i] = min;
    i++;
  }
   return list;
 }
 list = ascendOrder(list);
 
 // handle range expression
 let range;
 let l;
  for(let k=0; k<list.length; k++) {
    range = 0;
    l = 1;
    while(true) {
      if(list[k+l] == list[k]+l) {
        range = l;
      }
      else {
        break;
      }
      l++;
    }
    if(range>1) {      
      const insertItem = list[k]+'-'+list[k+range];
      list.splice(k,range+1);
      list.splice(k,0,insertItem);
    }
  }
 return list.join(',');
}
