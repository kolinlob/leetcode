function groupStrings(strings: string[]): string[][] {
  let res = [];

  while (strings.length) {
    let cur = strings.pop();
    let group = [cur];

    let len = strings.length, i = 0;

    while (strings.length && i < len) {
      let word = strings.pop();
      if (match(cur, word)) group.unshift(word);
      else strings.unshift(word);
      i++;
    }

    res.push(group);
  }

  return res;

  function match(a: string, b: string): boolean {
    if (a.length != b.length) return false;
    const s = getShift(a[0], b[0]);

    for (let i = 0; i < a.length; ++i) if (shift(a[i], s) != b[i]) return false;

    return true;

    function getShift(a: string, b: string): number {
      const ca = a.charCodeAt(0) - "a".charCodeAt(0);
      const cb = b.charCodeAt(0) - "a".charCodeAt(0);
      const diff = cb - ca;
      return diff < 0 ? 26 + diff : diff;
    }

    function shift(a: string, s: number): string {
      const ca = a.charCodeAt(0) - "a".charCodeAt(0);
      const cb = ((ca + s) % 26) + "a".charCodeAt(0);
      return String.fromCharCode(cb);
    }
  }
}
