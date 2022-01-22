function restoreString(s: string, indices: number[]): string {
  let chars = new Array(s.length);

  for (let i = 0; i < indices.length; ++i)
    chars[indices[i]] = s[i];

  return chars.join("");
}
