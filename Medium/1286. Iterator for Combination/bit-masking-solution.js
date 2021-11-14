/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
  let limit = 1 << characters.length, size = characters.length;
  this.combinations = [];

  for (let mask = limit; mask >= 0; mask--) {
    let count = 0;
    for (let i = 0; i < characters.length; i++)
        if (mask & (1 << i)) count++;

    if (count != combinationLength) continue;

    let combination = "";
    for (let j = size - 1; j >= 0; j--)
      if ((mask >> j) & 1)
        combination += characters[size - j - 1];

    this.combinations.push(combination);
  }

  this.combinations.reverse();
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  return this.combinations.pop();
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return this.combinations.length > 0;
};
