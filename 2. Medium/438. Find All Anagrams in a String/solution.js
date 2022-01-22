/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const ix = [];
  let left = 0,
      right = p.length - 1;
  const pMap = charCount(p),
        sMap = charCount(s.slice(left, right + 1));

  while (right < s.length) {
    if ([...sMap.entries()].every(([k, v]) => pMap.get(k) == v))
        ix.push(left);

    if (sMap.get(s[left]) > 1)
        sMap.set(s[left], sMap.get(s[left]) - 1);
    else sMap.delete(s[left]);

    left++;
    right++;
    sMap.set(s[right], (sMap.get(s[right]) ?? 0) + 1);
  }

  return ix;

  function charCount(str) {
    return str.split("").reduce((map, char) => map.set(char, (map.get(char) ?? 0) + 1),new Map());
  }
};
