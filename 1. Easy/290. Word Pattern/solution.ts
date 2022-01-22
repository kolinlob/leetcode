function wordPattern(pattern: string, s: string): boolean {
  let words = s.split(" ");

  if (pattern.length != words.length) return false;

  let p2s = new Map<string, string>();
  let s2p = new Map<string, string>();

  for (let i = 0; i < pattern.length; ++i) {
    if (p2s.has(pattern[i]) != s2p.has(words[i])) return false;

    if (!p2s.has(pattern[i])) p2s.set(pattern[i], words[i]);
    if (!s2p.has(words[i])) s2p.set(words[i], pattern[i]);

    if (p2s.get(pattern[i]) != words[i]) return false;
    if (s2p.get(words[i]) != pattern[i]) return false;
  }

  return true;
}
