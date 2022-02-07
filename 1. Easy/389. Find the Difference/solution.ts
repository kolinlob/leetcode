function findTheDifference(s: string, t: string): string {
  const sMap = [...s].reduce((m, c) => { m[c] = 1 + (m[c] || 0); return m }, {});
  const tMap = [...t].reduce((m, c) => { m[c] = 1 + (m[c] || 0); return m }, {});

  for (let tkey in tMap) {
    if (tkey in sMap) {
      if (sMap[tkey] < tMap[tkey]) return tkey;
    } else return tkey;
  }

  return "";
}
