/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const base = "A".charCodeAt(0) - 1;
  const n = columnTitle.length;

  let res = 0;
  for (let i = 0; i < n; i++)
    res += (columnTitle[n - 1 - i].charCodeAt(0) % base) * Math.pow(26, i);

  return res;
};
