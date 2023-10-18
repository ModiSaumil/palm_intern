// 10

// tree sorting

// Some people are standing in a row in a park.
// There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
// Example
// For a [-1, 150, 190, 170, -1, -1, 160, 180], the output should be sortByHeight (a) [-1, 150, 160, 170, -1, -1, 180, 190].


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



