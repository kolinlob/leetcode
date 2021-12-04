/**
 * @param {string[]} words
 */
class StreamChecker {
  constructor(words) {
    this.stream = [];
    this.trie = {};

    for (let word of words) {
      let node = this.trie;
      for (let i = word.length - 1; i >= 0; i--) {
        if (node[word[i]] == undefined) node[word[i]] = {};
        node = node[word[i]];
      }
      node.word = true;
    }
  }

  query(letter) {
    this.stream.push(letter);

    let node = this.trie;
    for (let i = this.stream.length - 1; i >= 0; i--) {
      if (node.word) return true;
      if (node[this.stream[i]] == undefined) return false;
      node = node[this.stream[i]];
    }

    return node.word == true;
  }
}
