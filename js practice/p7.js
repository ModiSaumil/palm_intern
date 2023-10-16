// 7 max adjecents

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
