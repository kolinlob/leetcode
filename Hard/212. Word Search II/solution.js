/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  let trie = new Trie();
  for (let word of words)
    trie.insert(word);

  let vis = new Array(board.length)
    .fill(null)
    .map(() => new Array(board[0].length).fill(false));

  let res = new Set();
  for (let r = 0; r < board.length; r++)
    for (let c = 0; c < board[r].length; c++)
        search(r, c, "");

  return [...res];

  function search(r, c, cand) {
    if (r < 0 || r >= board.length || c < 0 || c >= board[r].length || vis[r][c]) return;

    cand += board[r][c];
    if (!trie.match(cand)) return;
    if (trie.includes(cand) && !res.has(cand)) res.add(cand);

    vis[r][c] = true;
    directions.forEach(([y, x]) => search(r + y, c + x, cand));
    vis[r][c] = false;
  }
};

var Trie = function () {
  this.root = {};
};

Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let ch of word) {
    if (node[ch] == undefined) node[ch] = {};
    node = node[ch];
  }
  node.end = true;
};

Trie.prototype.match = function (prefix) {
  let node = this.root;
  for (let ch of prefix) {
    if (node[ch]) node = node[ch];
    else return false;
  }
  return true;
};

Trie.prototype.includes = function (word) {
  let node = this.root;
  for (let ch of word) {
    if (node[ch]) node = node[ch];
    else return false;
  }
  return node.end;
};
