function smallestSubsequence(s: string): string {
  const stack = [];
  const used = new Set<string>();

  const map = new Map<string, number>();
  for (let i = 0; i < s.length; ++i) map.set(s[i], i);

  for (let i = 0; i < s.length; ++i) {
    if (used.has(s[i])) continue;

    while (
      stack.length > 0 &&
      stack[stack.length - 1] > s[i] &&
      map.get(stack[stack.length - 1]) > i
    )
      used.delete(stack.pop());

    used.add(s[i]);
    stack.push(s[i]);
  }

  return stack.join("");
}
