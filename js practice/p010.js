// 13

// Given two strings, find the number of common
// characters between them.
// Example
// For $1 = "aabcc" and $2 "adcaa",
// output should be
// commonCharacterCount(s1, s2)= 3
// Strings have 3 common characters - 2 "a"
// and 1 "c".

var s1 = "saumil";
var s2 = "steve";

let count = 0;

for (let i = 0; i < s1.length; i++) {
  let char = s1[i];
  let index = s2.indexOf(char);
  if (index !== -1) {
    count++;
    s2 = s2.slice(0, index) + s2.slice(index + 1);
  }
}


console.log(count);
