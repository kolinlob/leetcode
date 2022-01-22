/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let matched = 0, minJ = 0, minLen = Infinity;
  let map = [...t].reduce((m, c) => m.set(c, m.get(c) + 1 || 1), new Map());

  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) - 1);
      if (map.get(s[i]) >= 0) matched += 1;
    }

    while (matched === t.length) {
      if (minLen > i - j + 1) {
        minLen = i - j + 1;
        minJ = j;
      }

      if (map.has(s[j])) {
        if (map.get(s[j]) === 0) matched -= 1;
        map.set(s[j], map.get(s[j]) + 1);
      }
      j++;
    }
  }

  return minLen == Infinity ? "" : s.slice(minJ, minJ + minLen);
};
