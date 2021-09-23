/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const directions = [
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
  ];

  for (let r = 0; r < board.length; r++)
    for (let c = 0; c < board[r].length; c++)
      if (r == 0 || r == board.length - 1 || c == 0 || c == board[r].length - 1)
        if (board[r][c] == "O") flip(r, c);

  for (let r = 0; r < board.length; r++)
    for (let c = 0; c < board[r].length; c++)
      board[r][c] = board[r][c] ? "X" : "O";

  function flip(row, col) {
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[row].length ||
      board[row][col] != "O"
    )
      return;

    board[row][col] = null;
    directions.forEach(({ x, y }) => flip(row + x, col + y));
  }
};
