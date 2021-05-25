/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operations = new Map([
    ["+", (a, b) => a + b],
    ["-", (a, b) => a - b],
    ["*", (a, b) => a * b],
    ["/", (a, b) => (a / b) >> 0],
  ]);

  const operands = [];
  for (let t of tokens) {
    if (isNaN(t)) {
      let b = operands.pop();
      let a = operands.pop();
      operands.push(operations.get(t)(a, b));
    } else {
      operands.push(Number(t));
    }
  }

  return operands.pop();
};
