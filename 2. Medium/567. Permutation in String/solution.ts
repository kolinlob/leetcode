function checkInclusion(s1: string, s2: string): boolean {
  const map = [...s1].reduce((m, c) => m.set(c, 1 + (m.get(c) ?? 0)), new Map());
  let match = map.size;

  for (let i = 0, j = 0; i < s2.length; ++i) {
    if (map.has(s2[i])) {
      map.set(s2[i], map.get(s2[i]) - 1);

      if (map.get(s2[i]) == 0) match -= 1;
    }

    if (match == 0) return true;

    if (i >= s1.length - 1) {
      if (map.has(s2[j])) {
        if (map.get(s2[j]) == 0) match += 1;

        map.set(s2[j], 1 + map.get(s2[j]));
      }
      j++;
    }
  }

  return false;
}
