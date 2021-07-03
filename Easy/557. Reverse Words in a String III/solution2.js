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
    reverse(0, w.length - 1);
    return w.join("");

    function reverse(s, e) {
      if (e < s) return;
      [w[s], w[e]] = [w[e], w[s]];
      reverse(s + 1, e - 1);
    }
  }
};
