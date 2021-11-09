/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/
function humanReadable (seconds) {
  // get number
  const hour = parseInt(seconds / 3600);
  const minute = parseInt(seconds % 3600 / 60);
  const second = parseInt(seconds % 3600 % 60);
  
  // modify number into given form
  function modify(number) {
    let stringNumber = String(number);
    if(stringNumber.length == 1) {
      stringNumber = '0'+stringNumber;
    }
    return stringNumber;
  }
  
  return modify(hour)+':'+modify(minute)+':'+modify(second);
}
