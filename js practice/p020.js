// 14

// Spiral Matrix
// Example :
// Input: matrix = [[1,2,3], [4,5,6], [7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Define the boundaries
  let fline = 0;
  let lline = 2;
  let left = 0;
  let right = 2;
  
  while (fline <= lline && left <= right) {
    // Traverse from left to right along the fline row
    for (let i = left; i <= right; i++) {
      console.log("first line left to right ",matrix[fline][i]);
    }
    fline++;
  
    // Traverse from fline to lline along the rightmost column
    for (let i = fline; i <= lline; i++) {
      console.log("last line top to bottom ",matrix[i][right]);
    }
    right--;
  
    // Check if there is a lline row to traverse
    if (fline <= lline) {
      // Traverse from right to left along the lline row
      for (let i = right; i >= left; i--) {
        console.log("last time right to left " ,matrix[lline][i]);
      }
      lline--;
    }
  
    // Check if there is a leftmost column to traverse
    if (left <= right) {
      // Traverse from lline to fline along the leftmost column
      for (let i = lline; i >= fline; i--) {
        console.log("bottom line to top till fline ", matrix[i][left]);
      }
      left++;
    }
  }
  