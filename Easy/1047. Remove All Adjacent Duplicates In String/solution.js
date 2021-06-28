/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];

  for (let letter of s) {
    if (stack.length == 0) stack.push(letter);
    else {
      const last = stack.pop();
      if (last != letter) {
        stack.push(last);
        stack.push(letter);
      }
    }
  }

  return stack.join("");
};
