class WordDictionary {
  private root;

  constructor() {
    this.root = {};
  }

  addWord(word: string): void {
    let node = this.root;

    for (let c of word) {
      if (node[c] == undefined) node[c] = {};
      node = node[c];
    }

    node.word = true;
  }

  search(word: string): boolean {
    return this.find(word, this.root);
  }

  find(word: string, node: any): boolean {
    for (let i = 0; i < word.length; ++i) {
      if (word[i] == ".") {
        for (let c in node) {
          if (typeof node[c] == "object" && this.find(word.slice(i + 1), node[c]))
            return true;
        }
      }

      if (node[word[i]] == undefined) return false;
      node = node[word[i]];
    }

    return node.word == true;
  }
}
