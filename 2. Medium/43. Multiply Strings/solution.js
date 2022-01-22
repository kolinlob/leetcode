/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 == "0" || num2 == "0") return "0";

  let n2 = num2.length, n1 = num1.length, res = new Array(n1 + n2);

  for (let i = n2 - 1; i >= 0; i--)
    for (let j = n1 - 1; j >= 0; j--) {
      let x = i + j;
      res[x + 1] = (res[x + 1] || 0) + num2[i] * num1[j];

      let carry = (res[x + 1] / 10) >> 0;
      if (carry > 0) res[x] = (res[x] || 0) + carry;
      if (res[x + 1] != undefined) res[x + 1] %= 10;
    }

  return res.join("");
};
