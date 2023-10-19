// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5

// Output:

// [
// [1],
// [1,1],
// [1,2,1]
// [1,3,3,1],
// [1,4,6,4,1]
// ]

var value = 5

for(let i =     1; i<=value;i++){
    var first_column = 1;

    for(j=1; j<=i;j++){
        document.write(first_column+" ")
        console.log(first_column * (i-j) / j)
        first_column = first_column * (i-j) / j;
    }
    document.write("<br>");
}