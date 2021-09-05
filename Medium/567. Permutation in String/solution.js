/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s2.length < s1.length) return false;

  const map1 = new Array(26).fill(0),
        map2 = new Array(26).fill(0),
        a = "a".charCodeAt(0);

  for (let i = 0; i < s1.length; i++) {
    map1[s1[i].charCodeAt(0) - a] = 1 + map1[s1[i].charCodeAt(0) - a];
    map2[s2[i].charCodeAt(0) - a] = 1 + map2[s2[i].charCodeAt(0) - a];
  }

  for (let e = 0; e < s2.length - s1.length; e++) {
    if (map1.every((v, i) => v == map2[i])) return true;

    map2[s2[e].charCodeAt(0) - a]--;
    map2[s2[e + s1.length].charCodeAt(0) - a]++;
  }

  return map1.every((v, i) => v == map2[i]);
};
