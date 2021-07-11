/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];

  permutate([], 0, 0);

  return res;

  function permutate(cur, op, cl) {
    if (cur.length == n * 2) {
      res.push(cur.join(""));
      return;
    }

    op < n  && permutate(cur.concat("("), op + 1, cl);
    op > cl && permutate(cur.concat(")"), op, cl + 1);
  }
};
