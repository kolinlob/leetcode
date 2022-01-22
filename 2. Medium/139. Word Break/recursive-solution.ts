function wordBreak(s: string, wordDict: string[]): boolean {
  let dict = new Set(wordDict);
  let memo = new Map<string, boolean>();

  return isWord(s);

  function isWord(word: string): boolean {
    if (word == "") return true;
    if (memo.has(word)) return memo.get(word);

    for (let i = 0; i < word.length; ++i) {
      if (dict.has(word.slice(0, i + 1)) && isWord(word.slice(i + 1))) {
        memo.set(word.slice(i + 1), true);
        return true;
      }
    }

    memo.set(word, false);
    return false;
  }
}
