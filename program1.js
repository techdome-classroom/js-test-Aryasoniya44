const getTotalIsles = function (grid) 
{
function exploreIsland(grid, row, col) {

  if (
      row < 0 ||
      col < 0 ||
      row >= grid.length ||
      col >= grid[0].length ||
      grid[row][col] === 'W'
  ) {
      return;
  }

  grid[row][col] = 'W';

  exploreIsland(grid, row + 1, col); 
  exploreIsland(grid, row - 1, col); 
  exploreIsland(grid, row, col + 1); 
  exploreIsland(grid, row, col - 1); 
}

function countIslands(grid) {
  if (!grid || grid.length === 0) {
      return 0;
  }

  let islandCount = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {
             
              islandCount++;
              
              exploreIsland(grid, i, j);
          }
      }
  }

  return islandCount;
}


const grid1 = [
  ['L', 'L', 'L', 'L', 'W'],
  ['L', 'L', 'W', 'L', 'W'],
  ['L', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
];
console.log(countIslands(grid1));

const grid2 = [
  ['L', 'L', 'W', 'W', 'W'],
  ['L', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'L'],
];
console.log(countIslands(grid2));

  module.exports = getTotalIsles;

}

