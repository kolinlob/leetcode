function partition(s: string): string[][] {
  let result: string[][] = [];
  backtrack(0, []);
  return result;

  function backtrack(from: number, part: string[]) {
    if (from >= s.length) result.push(part);

    for (let to = from; to < s.length; to++) {
      const candidate = s.substring(from, to + 1);
      if (isPalindrome(candidate)) backtrack(to + 1, [...part, candidate]);
    }
  }

  function isPalindrome(str: string) {
    if (!str) return false;
    if (str.length == 1) return true;
    return str == str.split("").reverse().join("");
  }
}
