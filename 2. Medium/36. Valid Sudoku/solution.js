/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill(null).map(() => new Set());
  const cols = new Array(9).fill(null).map(() => new Set());
  const boxes = new Array(9).fill(null).map(() => new Set());

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === ".") continue;

      const cur = board[row][col];

      if (rows[row].has(cur)) return false;
      rows[row].add(cur);

      if (cols[col].has(cur)) return false;
      cols[col].add(cur);

      const i = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      if (boxes[i].has(cur)) return false;
      boxes[i].add(cur);
    }
  }

  return true;
};
