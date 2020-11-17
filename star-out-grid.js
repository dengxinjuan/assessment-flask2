function starOutGrid(grid) {
    const numberRows = grid.length;
    const numberColumns = grid[0].length;

    const clearRows = Array(numberRows).fill(false);
    const clearColumns = Array(numberColumns).fill(false);

    for (let i = 0; i < numberRows; i++) {
        for (let j = 0; j < numberColumns; j++) {
          if (grid[i][j] === "*") {
            clearRows[i] = true;
            clearColumns[j] = true;
          }
        }
      }
    
      // Pass 2: clear rows and columns
      for (let i = 0; i < numberRows; i++) {
        for (let j = 0; j < numberColumns; j++) {
          if (clearRows[i] || clearColumns[j]) {
            grid[i][j] = "*";
          }
        }
      }
    
      return grid;


}
