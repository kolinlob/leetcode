/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(" ")
    .map((w) => reverse(w))
    .join(" ");

  function reverse(str) {
    let w = str.split("");
    let s = 0,
      e = w.length - 1;

    while (s <= e) {
      [w[s], w[e]] = [w[e], w[s]];
      s++;
      e--;
    }

    return w.join("");
  }
};
