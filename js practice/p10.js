// 10

// let inputarray = 
// let newarr = []

// for (let i = 0; i < inputarray.length; i++) {
//     if (inputarray[i] === -1) {
//         console.log("-1 found at index: " + i);

//     } else {
//         console.log(inputarray[i]);
//         continue;

//     }
// }

const inputArry = [-1, 150, 190, 170, -1, -1, 160, 180];

const p = inputArry.filter(height => height !== -1);
console.warn(p);
p.sort((a, b) => a - b);

const newsortarry = [];
let realIndex = 0;

for (let i = 0; i < inputArry.length; i++) {
    const height = inputArry[i];
    if (height === -1) {
        newsortarry.push(-1);
    } else {
        newsortarry.push(p[realIndex]);
        realIndex++;
    }
}

console.log(newsortarry);



