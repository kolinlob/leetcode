/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function (fruits) {
  let max = 0, i = 0, j = 0, trees = {};

  while (j < fruits.length) {
    trees[fruits[j]] = trees[fruits[j]] + 1 || 1;
    j++;

    while (Object.keys(trees).length > 2) {
        trees[fruits[i]] -= 1;

      if (trees[fruits[i]] == 0)
        delete trees[fruits[i]];
      
      i++;
    }

    max = Math.max(max, j - i);
  }

  return max;
};
