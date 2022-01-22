/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let mCount = [...magazine].reduce(
    (acc, cur) => acc.set(cur, 1 + (acc.get(cur) ?? 0)),
    new Map()
  );
  let rCount = [...ransomNote].reduce(
    (acc, cur) => acc.set(cur, 1 + (acc.get(cur) ?? 0)),
    new Map()
  );

  return [...rCount.entries()].every(([k, v]) => v <= mCount.get(k));
};
