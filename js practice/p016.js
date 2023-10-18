// 16

// Given a string, find out if its characters can be
// rearranged to form a palindrome.
// Example
// For inputString="aabb",
// the output should be
// palindrome Rearranging(inputstring) true.
// We can rearrange "aabb" to make "abba",
// which is
// a palindrome.
// all characters even = true
// all characters even and one odd = true

const inputString = "ssam";
const charCount = {};
for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    charCount[char] = (charCount[char] || 0) + 1;
}

let oddCount = 0;
const charKeys = Object.keys(charCount);

for (let i = 0; i < charKeys.length; i++) {
    const char = charKeys[i];
    if (charCount[char] % 2 !== 0) {
        oddCount++;
    }
}

const isPalindromeRearrange = oddCount <= 1;

console.log(isPalindromeRearrange);
