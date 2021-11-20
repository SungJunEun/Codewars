/*
### Description:

# **Task**

A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming `45 degree` angles with the axes.

How many points with integer coordinates are located inside the given rectangle (including on its sides)?

# **Example**

For `a = 6 and b = 4`, the output should be `23`

The following picture illustrates the example, and the 23 points are marked green.

[https://files.gitter.im/myjinxin2015/raYf/blob](https://files.gitter.im/myjinxin2015/raYf/blob)

# **Input/Output**

- `[input]` integer `a`
    
    A positive `even` integer.
    
    Constraints: `2 ≤ a ≤ 10000`.
    
- `[input]` integer `b`
    
    A positive `even` integer.
    
    Constraints: `2 ≤ b ≤ 10000`.
    
- `[output]` an integer
    
    The number of inner points with integer coordinates.
    */

function rectangleRotation(a, b) {
  const c= Math.ceil(Math.sqrt(Math.pow(a/2,2)+Math.pow(b/2,2)));
  let counter = 0;
  for(i=-c;i<c;i++) {
    for(j=-c;j<c;j++) {
      if(check(i,j,a,-1) && check(i,j,b,+1)) {
        counter++;
        console.log(counter);
      }
    }
  }
  function check(x,y,z,sign) {
    const one = sign*x-(z/2)*Math.sqrt(2) < y ;
    const two = sign*x+(z/2)*Math.sqrt(2) > y ;
    return one && two;
  }
  
  return counter;
}
