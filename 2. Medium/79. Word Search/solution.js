/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const directions = [
    [ 0, -1],
    [ 1,  0],
    [ 0,  1],
    [-1,  0],
  ];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (search(row, col, 0, newV()))
        return true;
    }
  }

  return false;

  function search(r, c, i, v) {
    if (r < 0 || r >= board.length || c < 0 || c >= board[r].length)
      return false;

    if (v[r][c] || board[r][c] != word[i])
        return false;

    if (i + 1 == word.length)
        return true;

    v[r][c] = true;

    const result = directions.reduce((acc, [y, x]) => acc || search(r + y, c + x, i + 1, v), false);

    if (result == false)
        v[r][c] = false;

    return result;
  }

  function newV() {
    return new Array(board.length)
      .fill(null)
      .map((x) => new Array(board[0].length).fill(false));
  }
};
