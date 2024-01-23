/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let str1 = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str1.charAt(i) === "a" ||
      str1.charAt(i) === "e" ||
      str1.charAt(i) === "i" ||
      str1.charAt(i) === "o" ||
      str1.charAt(i) === "u"
    ) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
