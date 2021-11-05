/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let map = words.reduce((m, w) => m.set(w, m.get(w) + 1 || 1), new Map()),
      wordLen = words[0].length,
      end = 1 + s.length - words.length * wordLen,
      res = [];

  for (let i = 0; i < end; i++) {
    let match = new Map();

    for (let w = i; w <= s.length - wordLen; w += wordLen) {
      let word = s.slice(w, w + wordLen);

      if (map.has(word)) {
        match.set(word, match.get(word) + 1 || 1);

        if (match.get(word) > map.get(word)) break;
      } else break;

      if (Array.from(map.entries()).every(([word, count]) => match.get(word) == count))
        res.push(i);
    }
  }

  return res;
};
