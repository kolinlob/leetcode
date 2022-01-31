function groupStrings(strings: string[]): string[][] {
  let map = strings.reduce((m, c) => {
    const key = getHash(c);

    if (m.has(key)) m.get(key).push(c);
    else m.set(key, [c]);

    return m;
  }, new Map<string, string[]>());

  return [...map.values()];

  function getHash(word: string): string {
    let hash = [];
    for (let i = 1; i < word.length; ++i) {
      const diff = (word.charCodeAt(i - 1) - word.charCodeAt(i)) % 26;
      hash[i] = diff < 0 ? 26 + diff : diff;
    }
    return hash.join("");
  }
}
