//15

// Given a rectangular matrix of characters, add a border
// of asterisks(*) to it.
// Example
// For
// picture = ["abc",
//  "ded"]
// the output should be
// addBorder(picture) = ["*****",
//    "*abc*",
//    "*ded*",
//    "*****"]

let inputArr = ["abc", "bde"];

var width = inputArr[0].length + 2;
console.warn(width)
var topborder = '*'.repeat(width)
inputArr.unshift(topborder);

var bottomborder = '*'.repeat(width)
inputArr.push(bottomborder);

for (i = 1; i < inputArr.length - 1; i++) {
    inputArr[i] = '*' + inputArr[i] + '*';
    console.log(inputArr);
}