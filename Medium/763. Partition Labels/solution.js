/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const pos = new Map();
  for (let i = 0; i < s.length; i++)
    pos.set(s[i], i);

  let start = 0, end = 0, res = [];
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, pos.get(s[i]));
    if (i == end) {
      res.push(i - start + 1);
      start = i + 1;
    }
  }

  return res;
};
