// Given a nodes labeled from 0 to 1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number

// of connected components in an undirected graph.


// Example 1:

// Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]

// Output: 2
// <image1>
// Example 2:

// Input: n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]]

// Output: 1
// <image2>

const e1 = [
    [0, 1],
    [1, 2],
    [3, 4]
];
const e2 = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4]
];

let n = 5;
function count(arr) {
    let temp;
    let c = 0;

    for (let i = 0; i < arr.length; i++) {
        // debugger
        for (let j = 0; j < arr[i].length; j++) {
            if (i === 0 && j === 0) {
                c++;
            }
            else {
                if (j === 0 && temp !== arr[i][j]) {
                    c++
                }
            }
            temp = arr[i][j];
        }
    }
    return c;
}
let count_e1 = count(e1);
console.log(count_e1);

let count_e2 = count(e2);
console.log(count_e2);

