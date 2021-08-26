/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const arr = preorder.split(",");
  const stack = [arr.shift()];

  while (arr.length > 0) {
    if (stack.length == 0) return false;

    const cur = arr.shift();
    while (cur == "#" && stack[stack.length - 1] == "#") {
      stack.pop();
      if (stack.length == 0) return false;
      stack.pop();
    }

    stack.push(cur);
  }

  return stack.length == 1 && stack.pop() == "#";
};
