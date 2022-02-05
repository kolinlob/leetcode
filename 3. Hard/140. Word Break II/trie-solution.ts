function wordBreak(s: string, wordDict: string[]): string[] {
  let res = [];

  let trie = new Trie();
  for (let word of wordDict) trie.insert(word);

  trySentence([], 0);
  return res.map((x) => x.join(" "));

  function trySentence(cur: string[], start: number): void {
    if (start == s.length) {
      res.push(cur);
      return;
    }

    for (let i = start; i < s.length; ++i) {
      const word = s.slice(start, i + 1);
      if (trie.contains(word))
        trySentence([...cur, word], i + 1);
    }
  }
}

class Trie {
  private root;

  constructor() {
    this.root = {};
  }

  insert(word: string): void {
    let node = this.root;

    for (let ch of word) {
      if (node[ch] == undefined) node[ch] = {};
      node = node[ch];
    }

    node.end = true;
  }

  contains(word: string): boolean {
    let node = this.root;

    for (let ch of word) {
      if (node[ch] == undefined) return false;
      node = node[ch];
    }

    return node.end == true;
  }
}
