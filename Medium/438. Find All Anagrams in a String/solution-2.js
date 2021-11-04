/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let result = [], map = [...p].reduce((m, c) => { m[c] = m[c] + 1 || 1; return m; }, {});
  let matched = 0, target = Object.keys(map).length;

  for (let i = 0, j = 0; i < s.length; i++) {
    if (s[i] in map) {
      map[s[i]] -= 1;
      if (map[s[i]] == 0) matched += 1;
    }

    if (matched == target) result.push(j);

    if (i >= p.length - 1) {
      if (s[j] in map) {
        if (map[s[j]] == 0) matched -= 1;
        map[s[j]] += 1;
      }
      j++;
    }
  }

  return result;
};
