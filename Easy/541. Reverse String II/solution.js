/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let strarr = s.split("");

  for (let i = 0; i < s.length; i += 2 * k) {
    let start = i, end = Math.min(start + k - 1, s.length - 1);
    while (start < end) {
      [strarr[end], strarr[start]] = [strarr[start], strarr[end]];
      start++;
      end--;
    }
  }

  return strarr.join("");
};
