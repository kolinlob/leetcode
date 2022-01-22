/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return process(s) == process(t);

  function process(str) {
    const res = new Array(str.length);

    for (let i = str.length - 1, h = 0; i >= 0; i--) {
      if (str[i] == "#") h++;
      else if (h == 0) res[i] = str[i];
      else h--;
    }

    return res.join("");
  }
};
