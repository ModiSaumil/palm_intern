// 17

// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
// Example : 
// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3
// Example 
// [2, 1, 10, 1] = original array
// [2, 3, 10, 11] = result array  (strictly increasing)
// [0, 2, 0, 10]= 12 = difference between 2 arrays


var arr = [2,1,10,1]

let moves = 0;

for (let i = 1; i< arr.length; i++) {
    console.log(arr[i])
    if(arr[i] <= arr[i-1]){
        var diff = arr[i - 1] - arr[i];
        diff = diff + 1 
        console.log("a",diff)
        arr[i] = arr[i]+diff;
        console.log("b",arr[i])
        moves = moves + diff;
        
    }
}

console.log("Total Moves: ",moves)