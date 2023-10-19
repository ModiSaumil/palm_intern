// Given two strings word1 and word2, return the minimum number of operations required to convert word
// You have the following three operations permitted on a word:
// Example 1:
// Input: word1="horse", word2 = "ros"
// Output: 3
// Explanation:
// horse->rorse (replace 'h' with 'r')
// rorse-> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:
// Input: word1="intention", word2= "execution"
// Output: 5
// Explanation:
// intention->inention (remove 't')
// inention ->enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
//  exention ->exection (replace 'n' with 'c')
// exection -> execution (insert 'u'))


function minOperations(word1, word2) {
    function longestCommonSubsequence(w1, w2) {
        const dp = Array.from(Array(w1.length + 1), () => Array(w2.length + 1).fill(0));

        for (let i = 1; i <= w1.length; i++) {
            for (let j = 1; j <= w2.length; j++) {
                if (w1[i - 1] === w2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[w1.length][w2.length];
    }

    const lcsLength = longestCommonSubsequence(word1, word2);
    return word1.length + word2.length - 2 * lcsLength;
}

// Example usage
// const word1 = "intention";
// const word2 = "execution";

const word1 = "horse";
const word2 = "ros";

const minOps = minOperations(word1, word2);
console.log(minOps); // Output: 4 (Replace 'h' with 'r', delete 'o', insert 's', insert 'e')

