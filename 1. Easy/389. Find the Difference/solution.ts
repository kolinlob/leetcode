function findTheDifference(s: string, t: string): string {
  const sMap = [...s].reduce((m, c) => { m[c] = 1 + (m[c] || 0); return m }, {});

  for (let ch of t) {
    if (ch in sMap) {
        if(--sMap[ch] < 0) return ch;
    }
    else return ch;
}

return "";
}
