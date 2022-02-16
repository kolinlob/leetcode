function numKLenSubstrNoRepeats(s: string, k: number): number {
  const map = new Map<string, number>();
  let res = 0;

  for (let i = 0, j = 0; i < s.length; ++i) {
    map.set(s[i], 1 + (map.get(s[i]) ?? 0));

    if (i - j + 1 == k && map.size == k) res++;

    if (i >= k - 1) {
      map.set(s[j], map.get(s[j]) - 1);
      if (map.get(s[j]) == 0) map.delete(s[j]);
      j++;
    }
  }

  return res;
}
