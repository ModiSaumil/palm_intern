// Given a strings, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a
// substring.
// Example 4:
// Input: s = ""
// Output: 0

let s = "pwwkew"; 
let maxLength = 0;
let currst = "";

for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const charIndex = currst.indexOf(char);
    console.warn("starting : ",charIndex)
    if (charIndex !== -1) {
        currst = currst.slice(charIndex + 1);
        console.warn("in if loop : ",currst)
    }

    currst += char;
    console.warn("char add : ",currst);
    maxLength = Math.max(maxLength, currst.length);
}

console.log(maxLength); 