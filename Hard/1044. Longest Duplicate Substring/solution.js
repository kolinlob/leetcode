/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function (s) {
  const charCodeAt = [...s].map((c) => c.charCodeAt() - 97),
    R = 26,
    Q = 2 ** 47 - 1,
    L = s.length;

  let lo = 1, hi = L,
      from = 0, to = 0;

  while (lo <= hi) {
    let M = (lo + hi) >> 1;
    let [i, j] = rabinKarp(M);

    if (i == j) hi = M - 1;
    else {
      lo = M + 1;
      from = i;
      to = j;
    }
  }

  return s.slice(from, to);

  function rabinKarp(m) {
    const set = new Set();

    let RpowM_1 = 1;
    for (let i = 1; i <= m - 1; i++)
        RpowM_1 = (R * RpowM_1) % Q;

    let hash = 0;
    for (let i = 0; i < m; i++)
      hash = (R * hash + charCodeAt[i]) % Q;

    set.add(hash);

    for (let i = m; i < L; i++) {
      hash = (hash + Q - ((RpowM_1 * charCodeAt[i - m]) % Q)) % Q;
      hash = (hash * R + charCodeAt[i]) % Q;

      if (set.has(hash))
        return [i - m + 1, i + 1];

      set.add(hash);
    }

    return [0, 0];
  }
};
