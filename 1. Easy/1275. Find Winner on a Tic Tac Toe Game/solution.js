/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  const a = moves.filter((x, i) => i % 2 == 0);
  const b = moves.filter((x, i) => i % 2 != 0);

  if (a.length > 2 && check(a)) return "A";
  if (b.length > 2 && check(b)) return "B";

  return moves.length == 9 ? "Draw" : "Pending";

  function check(movs) {
    const rows = Array.from(
      movs
        .map(([x, y]) => x)
        .reduce((map, cur) => map.set(cur, (map.get(cur) ?? 0) + 1), new Map())
        .values()
    ).some((v) => v == 3);
    if (rows) return true;

    const cols = Array.from(
      movs
        .map(([x, y]) => y)
        .reduce((map, cur) => map.set(cur, (map.get(cur) ?? 0) + 1), new Map())
        .values()
    ).some((v) => v == 3);
    if (cols) return true;

    const diag1 = movs.reduce((acc, [x, y]) => acc + (x == y), 0) == 3;
    if (diag1) return true;

    const diag2 = movs.reduce((acc, [x, y]) => acc + (x + y == 2), 0) == 3;
    if (diag2) return true;

    return false;
  }
};
