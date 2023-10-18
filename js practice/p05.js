// 7 max adjecents
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
// 7 and 3 produce the largest product

function high(inputArray) {
    let maxProduct = inputArray[0] * inputArray[1];
    console.log("maxproduct",maxProduct);
    for (let i = 1; i < inputArray.length - 1; i++) {
        let currentProduct = inputArray[i] * inputArray[i + 1];
        console.log("curr",currentProduct);
        maxProduct = Math.max(maxProduct, currentProduct);
    }
    return maxProduct;
}

let inputArray = [3, 6, -2, -5, 7, 3];
let result = high(inputArray);
console.log(result); 
