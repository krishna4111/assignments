/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let srt1 = str.toLowerCase();
  let start = 0;
  let end = str.length - 1;
  while (start <= end) {
    if (
      srt1.charAt(start) === " " ||
      srt1.charAt(start) === "?" ||
      srt1.charAt(start) === "!" ||
      srt1.charAt(start) === "." ||
      srt1.charAt(start) === ","
    ) {
      start++;
      continue;
    } else if (
      srt1.charAt(end) === " " ||
      srt1.charAt(end) === "?" ||
      srt1.charAt(end) === "!" ||
      srt1.charAt(end) === "." ||
      srt1.charAt(end) === ","
    ) {
      end--;
      continue;
    } else if (srt1.charAt(start) !== srt1.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
