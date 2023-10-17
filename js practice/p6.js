// 6 array compare
// Two arrays are called similar if one can be obtained
// from another by swapping at most one pair of
// elements in one of the arrays.
// Given two arrays a and b, check whether they
// are similar.
// Example
// For a = [1, 2, 3] and b = [1, 2, 3],
// the output should be
// areSimilar (a, b) = true.
// The arrays are equal, no need to swap any
// elements.
// For a = [1, 2, 3] and b = [2, 1, 3].
// the output should be
// areSimilar (a, b) = true.
// We can obtain b from a by swapping 2
// and 1 in b.
// For a = [1, 2, 2] and b = [2, 1, 1],
// the output should be
// areSimilar (a, b) = false.



let a = [1,2,2]
let b = [2,2,1]

var arr1 = a.sort();
var arr2 = b.sort();

if(JSON.stringify(arr1) == JSON.stringify(arr2)){
    console.log("True")
}else{
    console.log("false")
}
