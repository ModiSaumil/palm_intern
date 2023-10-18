// 11

// chess


function chessBoardCellColor(cell1, cell2) {
    
    const letters = 'ABCDEFGH';

    const col1 = letters.indexOf(cell1[0]) + 1; // Convert column letter to number
    
    const row1 = parseInt(cell1[1]);
    
    const col2 = letters.indexOf(cell2[0]) + 1;
    
    const row2 = parseInt(cell2[1]);
  
    // Check if the sum of row and column coordinates is even for both cells
    return (col1 + row1) % 2 === (col2 + row2) % 2;
  }
  
  // Example usage:
  console.log(chessBoardCellColor("A1", "C3"));  // true
  console.log(chessBoardCellColor("A1", "H3"));  // false
  
