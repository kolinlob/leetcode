/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  const [a, b] = parseComplex(num1);
  const [c, d] = parseComplex(num2);

  return `${a * c - b * d}+${a * d + b * c}i`;

  function parseComplex(num) {
    const x = num.indexOf("+");
    return [
      Number.parseInt(num.substring(0, x)),
      Number.parseInt(num.substring(x + 1, num.length - 1)),
    ];
  }
};
