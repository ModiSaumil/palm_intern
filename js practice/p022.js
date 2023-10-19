// Given an array of integers nums and an integer k, determine whether the are two distinct indices and in the array where nums[i] = nums[j] and the absolute difference between 1 and jis less than or equal to k
// Example
// For nuns [0, 1, 2, 3, 5, 2] and 3, the output
// should be
// contains CloseNums (nums, k) = true
// There are two 2 s in nums, and the absolute difference
// between their positions is exactly 3

var arr = [0, 1, 2, 3, 5, 2]

let repeat 
sort_arr = arr.sort(function (a, b) { return a - b });
console.log(sort_arr)

let dif = 0

for (let i = 0; i < sort_arr.length; i++) {
    dif = arr[i + 1] - arr[i]
    if (dif == 0) {        
        repeat = arr[i]
    }
}



console.log(repeat)