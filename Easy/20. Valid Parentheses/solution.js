/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  let stack = [];
  for (let b of s) {
    if (b == "(" || b == "{" || b == "[") stack.push(b);
    else if (map.get(b) != stack.pop()) return false;
  }

  return stack.length == 0;
};
