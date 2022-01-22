/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const A = ("L" + dominoes + "R").split("");

  for (let L = 0, R = 1; R < A.length; R++) {
    if (A[R] == ".") continue;
    if (A[L] == "L" && A[R] == "L") while (++L < R) A[L] = "L";
    if (A[L] == "R" && A[R] == "R") while (++L < R) A[L] = "R";
    if (A[L] == "R" && A[R] == "L") {
      let r = R;
      while (++L < --r) {
        A[L] = "R";
        A[r] = "L";
      }
    }
    L = R;
  }

  return A.slice(1, A.length - 1).join("");
};
