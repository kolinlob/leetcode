/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let map = [...s1].reduce((m, c) => { m[c] = m[c] + 1 || 1; return m; }, {});
  let matched = 0, target = Object.keys(map).length;

  for (let i = 0, j = 0; i < s2.length; i++) {
    if (s2[i] in map) {
      map[s2[i]] -= 1;
      if (map[s2[i]] == 0) matched++;
    }

    if (matched == target) return true;

    if (i >= s1.length - 1) {
      if (s2[j] in map) {
        if (map[s2[j]] == 0) matched--;
        map[s2[j]] += 1;
      }
      j++;
    }
  }

  return false;
};
