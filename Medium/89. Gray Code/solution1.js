/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let code = [""];

  return prefix(code, n).map((i) => parseInt(i, 2));

  function prefix(code, n) {
    if (code.length >= 1 << n) return code;

    let reversed = [...code].reverse();

    code = code.map((i) => "0" + i);
    reversed = reversed.map((i) => "1" + i);

    code = code.concat(reversed);
    return prefix(code, n);
  }
};
