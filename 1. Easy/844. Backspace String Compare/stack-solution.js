/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return process(s) == process(t);

  function process(str) {
    const stack = [];
    for (let char of str.split(""))
      if (char == "#") {
        if (stack.length)
            stack.pop();
      } else stack.push(char);

    return stack.join("");
  }
};
