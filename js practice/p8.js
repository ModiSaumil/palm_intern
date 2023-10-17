// 8 
// Given a string, your task is to replace each of its
// characters by the next one in the English alphabet; i.e. replace a with b, replace with c, etc ( z would
// be replaced by a ).
// Example
// For inputstring "crazy", the output should be alphabeticshift(inputstring) = "dsbaz".
// Input/Output
// ⚫ [execution time limit] 4 seconds (js)
// [input] string inputString
// A non-empty string consisting of lowercase English characters.
// Guaranteed constraints:
// 1 inputstring.lengths 1000
// ⚫ [output] string
// The resulting string after replacing each of its
// characters.

function alphabet(name) {
    var split = name.split("");

    for(var i = 0; i < split.length; i++) {
      var n = split[i].charCodeAt() - 'a'.charCodeAt();
      n = (n + 1) % 26; 
      split[i] = String.fromCharCode(n + 'a'.charCodeAt());
    }
    return split;
  }
  
  console.log(alphabet("Steve"))
