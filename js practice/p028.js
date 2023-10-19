// Given a non-empty strings and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation. You may assume the dictionary does not contain duplicate words.

// Example 1:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple". Note that you are allowed to reuse a dictionary word.

// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false
// Explanation : It is not in sequence.

const wordD1 = ["apple", "pen"];
let s1 = "applepenapple";

const wordD2 = ["cats", "dog", "sand", "and", "cat"];
let s2 = "catsandog";

function ch(a, s) {
    // debugger
    let res;
    for (let i = 0; i < a.length; i++) {
        res = s.includes(a[i]);
        if (res) {
            s = s.replace(a[i], '**')
        }
    }
    return res;
}

console.log(ch(wordD1,s1))