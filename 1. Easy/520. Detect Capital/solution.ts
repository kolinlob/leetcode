function detectCapitalUse(word: string): boolean {
  let upper = 0, lower = 0, regex = /^[A-Z]$/, firstCapital = regex.test(word[0]);

  for (let letter of word) {
    let up = Number(regex.test(letter));
    upper += up;
    lower += 1 - up;
  }

  if (upper == word.length) return true;
  if (lower == word.length) return true;
  if (firstCapital && upper == 1) return true;

  return false;
}
