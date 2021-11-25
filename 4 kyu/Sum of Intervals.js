/*
Description:
Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19
*/

function sumIntervals(intervals){
  
  for(i=0;i<intervals.length;i++) {
    let min = intervals[i];
    let index;
    for(j=i;j<intervals.length;j++) {
      if(min[0] > intervals[j][0]) {
        min = intervals[j];
        index = j;
      }
    }
    intervals[index] = intervals[i];
    intervals[i] = min;
  }

  for(i=0;i<intervals.length-1;i+=0) {
    if(intervals[i][1] <= intervals[i+1][0]) {
      i++;
      continue;
    } else {
      intervals[i+1][0] = (intervals[i][0] <= intervals[i+1][0]) ? intervals[i][0] : intervals[i+1][0];
      intervals[i+1][1] = (intervals[i][1] >= intervals[i+1][1]) ? intervals[i][1] : intervals[i+1][1];
      intervals.splice(i,1);
    }
  }

  const sum = intervals.reduce(function(acc,cur){
    acc += cur[1] - cur[0];
    return acc;
  },0);
  
  return sum;
}

