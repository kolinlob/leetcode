/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  let sMap = [...s].reduce((a, c) => a.set(c, 1 + (a.get(c) ?? 0)), new Map());
  let tMap = [...t].reduce((a, c) => a.set(c, 1 + (a.get(c) ?? 0)), new Map());

  return [...tMap.entries()].every(([k, v]) => sMap.get(k) == v);
};
